import db from '@/app/db/db';
import {
  getFilteredProducts,
  newProduct,
  getProduct,
} from '@/controllers/productControllers';

await db.connect();

export function POST(req, res) {
  return newProduct(req, res);
}

export async function GET(req, res) {
  return await getFilteredProducts(req, res);
}

export function PUT(req, res) {
  return getProduct(req, res);
}
