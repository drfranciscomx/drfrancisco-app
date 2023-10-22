import db from "@/lib/db";
import {
  getFilteredProducts,
    newProduct,
    getProduct,
} from "@/controllers/productControllers";

await db.connect()

export function POST(req, res) {
  db.disconnect()
    return newProduct(req, res);
  }
  
  export async function GET(req, res) {
    db.disconnect()
    return getFilteredProducts(req, res);
  }
  
  export function PUT(req, res) {
    return getProduct(req, res);
  }
  
