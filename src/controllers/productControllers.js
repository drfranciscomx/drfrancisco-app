import { NextResponse } from 'next/server';
const { default: Product } = require('@/models/Product');
import APIFilters from '@/utils/APIFilters';

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  return new Response(product, {
    status: 200,
  });
};

export const getFilteredProducts = async (req, res, next) => {
  const resPerPage = 12;
  // total number of documents in database
  const productsCount = await Product.countDocuments();

  try {
    // Database operations
    const apiFilters = await new APIFilters(
      Product.find(),
      req.nextUrl.searchParams
    )
      .searchtwo()
      .filter();

    let products = await apiFilters.query;
    const filteredProductsCount = products.length;

    apiFilters.pagination(resPerPage);

    // clone() is mongoose function to execute query more than once
    products = await apiFilters.query.clone();

    return new Response(
      JSON.stringify({
        productsCount,
        resPerPage,
        filteredProductsCount,
        products,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in database operations:', error);
    return new Response(
      { status: 500 },
      { error: 'An error occurred while fetching products.' }
    );
  }
};

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    res.status(404).json({
      error: 'Product not found.',
    });
  }

  res.status(200).json({
    product,
  });
};
