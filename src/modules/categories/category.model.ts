// category.model.ts
import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  nome: { type: String, required: true },
  tiposPermitidos: { type: [String], required: true }
});

export const Category = model('Category', CategorySchema);
