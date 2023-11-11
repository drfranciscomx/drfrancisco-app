import { NextResponse } from 'next/server';
import { localproducts } from '@/data/localproductsdatta.';

export const GET = async (req) => {
  const _id = req.url.split('?')[1];

  try {
    const product = localproducts.find((obj) => obj._id === _id);
    const response = NextResponse.json({
      message: 'One Product fetched successfully',
      success: true,
      product,
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
