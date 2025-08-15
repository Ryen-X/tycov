import { pgTable, serial, timestamp, varchar, boolean, bigint } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL!);

export const responses = pgTable('responses', {
  response_id: serial('response_id').primaryKey(),
  timestamp: timestamp('timestamp').defaultNow(),
  user_session: varchar('user_session').notNull(),
  image_id: varchar('image_id').notNull(),
  image_label: varchar('image_label').notNull(),
  user_choice: varchar('user_choice').notNull(),
  correct: boolean('correct').notNull(),
});

export const stats = pgTable('stats', {
  id: serial('id').primaryKey(),
  timestamp: timestamp('timestamp').defaultNow(),
  total_responses: bigint('total_responses', { mode: 'number' }).notNull(),
  correct_real: bigint('correct_real', { mode: 'number' }).notNull(),
  incorrect_real: bigint('incorrect_real', { mode: 'number' }).notNull(),
  correct_ai: bigint('correct_ai', { mode: 'number' }).notNull(),
  incorrect_ai: bigint('incorrect_ai', { mode: 'number' }).notNull(),
});

const schema = {
  responses,
  stats,
};

export const db = drizzle(client, { schema });
