// src/routes.ts
import { Router } from 'express';
import { categoriesPage, createCategoryHandler } from './modules/categories/category.controller';
import { transactionsPage, createTransactionHandler, summaryPage } from './modules/transactions/transaction.controller';

const routes = Router();

routes.get('/', (req, res) => res.redirect('/summary'));

routes.get('/categories', categoriesPage);
routes.post('/categories', createCategoryHandler);

routes.get('/transactions', transactionsPage);
routes.post('/transactions', createTransactionHandler);

routes.get('/summary', summaryPage);

export default routes;
