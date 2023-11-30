'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import Pagination from 'react-js-pagination';

const CustomPagination = ({ resPerPage, productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get('page') || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage) => {
    if (typeof window !== 'undefined') {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has('page')) {
        queryParams.set('page', currentPage);
      } else {
        queryParams.append('page', currentPage);
      }

      const path = window.location.pathname + '?' + queryParams.toString();
      router.push(path);
    }
  };

  return (
    <div className="relative mt-20 ">
      <Pagination
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productsCount}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        nextPageText={'Next'}
        prevPageText={'Prev'}
        firstPageText={'First'}
        lastPageText={'Last'}
        itemClass="cursor-pointer relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 duration-600"
        activeLinkClassName="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20 duration-600"
        activeClass="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20 duration-600"
        innerClass={'flex justify-center items-center w-full mx-auto'}
      />
    </div>
  );
};

export default CustomPagination;
