import { NextResponse } from "next/server";

import db from "@/app/db/db";
import Product from "@/models/Product"
import { localproducts } from '@/data/localproductsdatta.';



export const GET = async(req) => {
    
    await db.connect()
    
    const _id =req.url.split('?')[1];
   
    try {
        const product = localproducts.find(obj => obj._id === _id);
        
        const response = NextResponse.json({
            message: "One Product fetched succesfully",
            success: true,
            product,
        });
        return response
        
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Products loading error',
            },
            { status: 500 }
        );
    }
};