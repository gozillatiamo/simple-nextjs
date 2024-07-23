import bcrypt from 'bcrypt';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';
import { PoolClient } from 'pg';
import { pool, db } from '../lib/db';
import type * as s from 'zapatos/schema';


async function seedUsers(txn: PoolClient) {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      return db.sql<s.users.SQL>`
        INSERT INTO ${"users"} (${db.cols(user)})
        VALUES (${db.vals(user)})
        ON CONFLICT (id) DO NOTHING;
      `.run(txn);
    }),
  );

  return insertedUsers;
}

async function seedInvoices(txn: PoolClient) {
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => db.sql<s.invoices.SQL>`
        INSERT INTO ${"invoices"} (${db.cols(invoice)})
        VALUES (${db.vals(invoice)})
        ON CONFLICT (id) DO NOTHING;
      `.run(txn),
    ),
  );

  return insertedInvoices;
}

async function seedCustomers(txn: PoolClient) {
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => db.sql<s.customers.SQL>`
        INSERT INTO ${"customers"} (${db.cols(customer)})
        VALUES (${db.vals(customer)})
        ON CONFLICT (id) DO NOTHING;
      `.run(txn),
    ),
  );

  return insertedCustomers;
}

async function seedRevenue(txn: PoolClient) {

  const insertedRevenue = await Promise.all(
    revenue.map((rev) => 
      db.sql<s.revenue.SQL>`
        INSERT INTO ${"revenue"} (${db.cols(rev)})
        VALUES (${db.vals(rev)})
        ON CONFLICT (month) DO NOTHING;
      `.run(txn)
    )
  );
   return insertedRevenue;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await db.serializable(pool, async txnClient => {
      await seedUsers(txnClient); 
      await seedCustomers(txnClient);
      await seedInvoices(txnClient);
      await seedRevenue(txnClient);
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}
