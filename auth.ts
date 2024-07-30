import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { db, pool } from '@/app/lib/db';
import type { users } from 'zapatos/schema';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<users.Selectable | undefined> {
  try {
    const user = await db.sql <users.SQL, users.Selectable[]>`
      SELECT * FROM ${"users"} WHERE ${"email"} = ${db.param(email)}
    `.run(pool);
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);

      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user;
      }

      console.log('Invalid credentials');
      return null;
    }
  })],
});
