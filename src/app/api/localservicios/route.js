import { NextResponse } from 'next/server';
import { localproducts } from '@/data/localproductsdatta';

export const GET = async () => {
  try {
    const products = localproducts;
    const response = NextResponse.json({
      message: 'Local Products fetched successfully',
      success: true,
      products,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Products loading error',
      },
      { status: 500 }
    );
  }
};
