// transaction.controller.ts
import { Request, Response } from 'express';
import { listTransactions, createTransaction, getSummary } from './transaction.service';
import { listCategories } from '../categories/category.service';

export async function transactionsPage(req: Request, res: Response) {
  const transactions = await listTransactions();
  const categories = await listCategories();
  res.render('transactions', { transactions, categories });
}

export async function createTransactionHandler(req: Request, res: Response) {
  await createTransaction(req.body);
  res.redirect('/transactions');
}

export async function summaryPage(req: Request, res: Response) {
  const summary = await getSummary();
  res.render('summary', summary);
}
