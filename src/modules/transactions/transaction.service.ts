// transaction.service.ts
import { Transaction } from './transaction.model';
import { TransactionType } from '../../shared/enums';

export async function createTransaction(data: any) {
  if (data.tipo !== TransactionType.TRANSFERENCIA && !data.categoria) {
    throw new Error('Categoria obrigatória');
  }
  return Transaction.create(data);
}

export async function listTransactions() {
  return Transaction.find().populate('categoria').sort({ data: -1 });
}

export async function getSummary() {
  const txs = await Transaction.find();
  let receitas = 0;
  let despesas = 0;

  txs.forEach(t => {
    if (t.tipo === TransactionType.RECEITA) receitas += t.valor;
    if (t.tipo === TransactionType.DESPESA) despesas += t.valor;
  });

  return {
    receitas,
    despesas,
    saldo: receitas - despesas
  };
}
