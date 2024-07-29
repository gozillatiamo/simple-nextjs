'use server';

import { z } from 'zod';
import { pool, db } from '@/app/lib/db';
import type { invoices } from 'zapatos/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const invoice = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    date: new Date().toISOString().split('T')[0]
  });

  // Convert monetary to Cents
  invoice.amount = invoice.amount * 100;
  const invoiceCols = <const>['customer_id', 'amount', 'status', 'date'];
  // For returning values
  // type NewInvoice = invoices.OnlyCols<typeof invoiceCols>;
  try {
    await db.sql<invoices.SQL>`
    INSERT INTO ${"invoices"} (${db.cols(invoiceCols)}) 
    VALUES (${db.vals(Object.values(invoice))})
  `.run(pool);
  } catch (err) {
    return {
      message: 'Database Error: Failed to  Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const invoice = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  // Convert monetary to Cents
  invoice.amount = invoice.amount * 100;

  try {
    await db.sql<invoices.SQL>`
    UPDATE ${"invoices"}
    SET ${"customer_id"} = ${db.param(invoice.customerId)},
    ${"amount"} = ${db.param(invoice.amount)},
    ${"status"} = ${db.param(invoice.status)}
    WHERE ${"id"} = ${db.param(id)}
  `.run(pool);
  } catch (err) {
    return {
      message: 'Database Error: Failed to Update Invoice.'
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice.');
  try {
    await db.sql<invoices.SQL>`
    DELETE FROM ${"invoices"} WHERE ${"id"} = ${db.param(id)}
  `.run(pool);
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (err) {
    return {
      message: 'Database Error: Failed to Delete Invoice.'
    };
  }
}
