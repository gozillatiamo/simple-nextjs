// import { sql } from '@vercel/postgres';
import {
  CustomerField,
  // CustomersTableType,
  Invoice,
  // InvoiceForm,
  // InvoicesTable,
  LatestInvoiceRaw,
  // Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import type * as s from 'zapatos/schema';
import { pool, db } from "./db";

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));


    const revenues = await db.sql<s.revenue.SQL, s.revenue.Selectable[]>`
      SELECT * FROM ${"revenue"}`.run(pool);

    console.log('Data fetch completed after 3 seconds.');

    return revenues;
    // return []
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {

    console.log('Fetching latest invoices data...');
    await new Promise((resolve) => setTimeout(resolve, 4000));

    type invoiceCustomerSQL = s.invoices.SQL | s.customers.SQL
    const data = await db.sql<invoiceCustomerSQL, LatestInvoiceRaw[]>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`.run(pool);

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    console.log('Data fetch completed after 4 seconds.');

    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    console.log('Fetching card data data...');
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const invoiceCountPromise = db.sql<s.invoices.SQL, [{count: number}]>`SELECT COUNT(*) FROM ${"invoices"}`.run(pool);
    const customerCountPromise = db.sql<s.customers.SQL, [{count: number}]>`SELECT COUNT(*) FROM ${"customers"}`.run(pool);
    const invoiceStatusPromise = db.sql<s.invoices.SQL, [{paid: number, pending: number}]>`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`.run(pool);

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0][0].count ?? '0');
    const numberOfCustomers = Number(data[1][0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2][0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2][0].pending ?? '0');

    console.log('Data fetch completed after 5 seconds.');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 3;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  type invoiceCustomer = s.invoices.SQL | s.customers.SQL;
  type invoiceCustomerResult = {
    id: string
    amount: number 
    date: string
    status: string
    name: string
    email: string
    image_url: string
  }
  try {
    query = `%${query}%`;
    const invoices = await db.sql<invoiceCustomer, invoiceCustomerResult[]>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${db.param(query)} OR
        customers.email ILIKE ${db.param(query)} OR
        invoices.amount::text ILIKE ${db.param(query)} OR
        invoices.date::text ILIKE ${db.param(query)} OR
        invoices.status ILIKE ${db.param(query)}
      ORDER BY invoices.date DESC
      LIMIT ${db.param(ITEMS_PER_PAGE)} OFFSET ${db.param(offset)}
    `.run(pool);

    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    query = `%${query}%`;
    type invoiceCustomerSQL = s.invoices.SQL | s.customers.SQL
    const stmt = db.sql<invoiceCustomerSQL, number>`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${db.param(query)} OR
      customers.email ILIKE ${db.param(query)} OR
      invoices.amount::text ILIKE ${db.param(query)} OR
      invoices.date::text ILIKE ${db.param(query)} OR
      invoices.status ILIKE ${db.param(query)} 
    `;
    stmt.runResultTransform = result => result.rows[0].count;
    const count = await stmt.run(pool);

    console.log("Count: ", count);
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    console.log("fetchInvoicesPages totalPages: ", totalPages);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await db.sql<s.invoices.SQL, Invoice[]>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${db.param(id)};
    `.run(pool);

    const invoice = data.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await db.sql<s.customers.SQL, CustomerField[]>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `.run(pool);

    const customers = data;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }
