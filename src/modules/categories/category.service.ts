// category.service.ts
import { Category } from './category.model';

export async function createCategory(nome: string, tiposPermitidos: string[]) {
  return Category.create({ nome, tiposPermitidos });
}

export async function listCategories() {
  return Category.find();
}
