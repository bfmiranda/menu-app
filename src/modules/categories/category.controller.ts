// category.controller.ts
import { Request, Response } from 'express';
import { createCategory, listCategories } from './category.service';

export async function categoriesPage(req: Request, res: Response) {
  const categories = await listCategories();
  res.render('categories', { categories });
}

export async function createCategoryHandler(req: Request, res: Response) {
  const { nome, tiposPermitidos } = req.body;
  await createCategory(nome, Array.isArray(tiposPermitidos) ? tiposPermitidos : [tiposPermitidos]);
  res.redirect('/categories');
}
