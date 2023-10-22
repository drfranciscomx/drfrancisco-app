"use client";

import React from "react";
import Filters from "@/components/layouts/Filters";
import CustomPagination from "../layouts/Pagination";
import ProductsData from "./ProductsData";


const ListProducts = ({ data }) => {
  return (
    <section className="py-12 mx-auto px-10 md:px-5">
       
      <div className=" mx-auto flex justify-center items-centerw-full">
        <div className="flex md:flex-col flex-row  w-[90%]">
        
          <div className=" md:w-full justify-center items-center gap-x-5">
            <main className=" grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 mdsm:grid-cols-2 sm:grid-cols-1 gap-10">
            
              {data?.map((product) => (
                
                <ProductsData item={product} key={product._id} />
              ))}
            </main>
            {/* <CustomPagination resPerPage={data?.resPerPage} productsCount={data?.filteredProductsCount}/> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ListProducts;