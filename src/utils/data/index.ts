import Surreal from 'surrealdb.js';
export const db = new Surreal(process.env.DB_URL);