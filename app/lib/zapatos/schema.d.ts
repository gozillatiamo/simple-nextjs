/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **customers**
   * - Table in database
   */
  export namespace customers {
    export type Table = 'customers';
    export interface Selectable {
      /**
      * **customers.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **customers.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **customers.image_url**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      image_url: string;
      /**
      * **customers.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface JSONSelectable {
      /**
      * **customers.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **customers.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **customers.image_url**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      image_url: string;
      /**
      * **customers.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface Whereable {
      /**
      * **customers.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **customers.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **customers.image_url**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      image_url?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **customers.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **customers.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **customers.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **customers.image_url**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      image_url: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **customers.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **customers.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **customers.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **customers.image_url**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      image_url?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **customers.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'customers_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **invoices**
   * - Table in database
   */
  export namespace invoices {
    export type Table = 'invoices';
    export interface Selectable {
      /**
      * **invoices.amount**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      amount: number;
      /**
      * **invoices.customer_id**
      * - `uuid` in database
      * - `NOT NULL`, no default
      */
      customer_id: string;
      /**
      * **invoices.date**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      date: Date;
      /**
      * **invoices.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **invoices.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string;
    }
    export interface JSONSelectable {
      /**
      * **invoices.amount**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      amount: number;
      /**
      * **invoices.customer_id**
      * - `uuid` in database
      * - `NOT NULL`, no default
      */
      customer_id: string;
      /**
      * **invoices.date**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      date: db.DateString;
      /**
      * **invoices.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **invoices.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string;
    }
    export interface Whereable {
      /**
      * **invoices.amount**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      amount?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **invoices.customer_id**
      * - `uuid` in database
      * - `NOT NULL`, no default
      */
      customer_id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **invoices.date**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      date?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **invoices.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **invoices.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **invoices.amount**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      amount: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **invoices.customer_id**
      * - `uuid` in database
      * - `NOT NULL`, no default
      */
      customer_id: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **invoices.date**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      date: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment;
      /**
      * **invoices.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **invoices.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **invoices.amount**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      amount?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **invoices.customer_id**
      * - `uuid` in database
      * - `NOT NULL`, no default
      */
      customer_id?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **invoices.date**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      date?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment>;
      /**
      * **invoices.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **invoices.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'invoices_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **revenue**
   * - Table in database
   */
  export namespace revenue {
    export type Table = 'revenue';
    export interface Selectable {
      /**
      * **revenue.month**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      month: string;
      /**
      * **revenue.revenue**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      revenue: number;
    }
    export interface JSONSelectable {
      /**
      * **revenue.month**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      month: string;
      /**
      * **revenue.revenue**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      revenue: number;
    }
    export interface Whereable {
      /**
      * **revenue.month**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      month?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **revenue.revenue**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      revenue?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **revenue.month**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      month: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **revenue.revenue**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      revenue: number | db.Parameter<number> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **revenue.month**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      month?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **revenue.revenue**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      revenue?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
    }
    export type UniqueIndex = 'revenue_month_key';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **schema_migrations**
   * - Table in database
   */
  export namespace schema_migrations {
    export type Table = 'schema_migrations';
    export interface Selectable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface JSONSelectable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface Whereable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'schema_migrations_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **users**
   * - Table in database
   */
  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **users.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string;
    }
    export interface JSONSelectable {
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **users.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string;
    }
    export interface Whereable {
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **users.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **users.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **users.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.password**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_email_key' | 'users_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = customers.Table | invoices.Table | revenue.Table | schema_migrations.Table | users.Table;
    export type Selectable = customers.Selectable | invoices.Selectable | revenue.Selectable | schema_migrations.Selectable | users.Selectable;
    export type JSONSelectable = customers.JSONSelectable | invoices.JSONSelectable | revenue.JSONSelectable | schema_migrations.JSONSelectable | users.JSONSelectable;
    export type Whereable = customers.Whereable | invoices.Whereable | revenue.Whereable | schema_migrations.Whereable | users.Whereable;
    export type Insertable = customers.Insertable | invoices.Insertable | revenue.Insertable | schema_migrations.Insertable | users.Insertable;
    export type Updatable = customers.Updatable | invoices.Updatable | revenue.Updatable | schema_migrations.Updatable | users.Updatable;
    export type UniqueIndex = customers.UniqueIndex | invoices.UniqueIndex | revenue.UniqueIndex | schema_migrations.UniqueIndex | users.UniqueIndex;
    export type Column = customers.Column | invoices.Column | revenue.Column | schema_migrations.Column | users.Column;
  
    export type AllBaseTables = [customers.Table, invoices.Table, revenue.Table, schema_migrations.Table, users.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [customers.Table, invoices.Table, revenue.Table, schema_migrations.Table, users.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "customers": customers.Selectable;
    "invoices": invoices.Selectable;
    "revenue": revenue.Selectable;
    "schema_migrations": schema_migrations.Selectable;
    "users": users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "customers": customers.JSONSelectable;
    "invoices": invoices.JSONSelectable;
    "revenue": revenue.JSONSelectable;
    "schema_migrations": schema_migrations.JSONSelectable;
    "users": users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "customers": customers.Whereable;
    "invoices": invoices.Whereable;
    "revenue": revenue.Whereable;
    "schema_migrations": schema_migrations.Whereable;
    "users": users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "customers": customers.Insertable;
    "invoices": invoices.Insertable;
    "revenue": revenue.Insertable;
    "schema_migrations": schema_migrations.Insertable;
    "users": users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "customers": customers.Updatable;
    "invoices": invoices.Updatable;
    "revenue": revenue.Updatable;
    "schema_migrations": schema_migrations.Updatable;
    "users": users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "customers": customers.UniqueIndex;
    "invoices": invoices.UniqueIndex;
    "revenue": revenue.UniqueIndex;
    "schema_migrations": schema_migrations.UniqueIndex;
    "users": users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "customers": customers.Column;
    "invoices": invoices.Column;
    "revenue": revenue.Column;
    "schema_migrations": schema_migrations.Column;
    "users": users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "customers": customers.SQL;
    "invoices": invoices.SQL;
    "revenue": revenue.SQL;
    "schema_migrations": schema_migrations.SQL;
    "users": users.SQL;
  }[T];

}