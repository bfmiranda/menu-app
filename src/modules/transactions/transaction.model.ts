// transaction.model.ts
import { Schema, model } from 'mongoose';
import { TransactionType } from '../../shared/enums';

const TransactionSchema = new Schema({
  tipo: { type: String, enum: Object.values(TransactionType), required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Category' },
  valor: { type: Number, required: true },
  data: { type: Date, required: true },
  descricao: String,
  criadoEm: { type: Date, default: Date.now }
});

export const Transaction = model('Transaction', TransactionSchema);
