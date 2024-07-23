import pg from 'pg';
import { debug } from 'util';
import * as zdb from 'zapatos/db';

const 
  queryDebug = debug('db:query'),
  resultDebug = debug('db:result'),
  txnDebug = debug('db:transaction'),
  strFromTxnId = (txnId: number | undefined) => txnId === undefined ? '-' : String(txnId),
  db = zdb,
  pool = new pg.Pool({connectionString: process.env.POSTGRES_URL});

pool.on('error', err => console.error(err));

db.setConfig({
  queryListener: (query, txnId) =>
    queryDebug(`(%s) %s\n%o`, strFromTxnId(txnId), query.text, query.values),
  resultListener: (result, txnId, elapseMs) => 
    resultDebug(`(%s, %dms) %O`, strFromTxnId(txnId), elapseMs?.toFixed(1), result),
  transactionListener: (message, txnId) => 
    txnDebug(`(%s) %s`, strFromTxnId(txnId), message),
});

export {
  pool,
  db
};
