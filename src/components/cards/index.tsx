import React from "react";

import data from "@public/meta.json";
import {cardProp , product} from "@redux/types"
export const Cards = (props:cardProp) => {

const { products } = props;

console.log(products)
  return (
    <div className="bg-white">
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

{products?.map((item:product) => (
 <div className="card flex flex-col rounded overflow-hidden shadow-lg">
 <img className="card__image object-cover h-56 p-4" src={item.image} alt={item.title} />
 <div className="p-2">
   <div className="card__title text-center font-bold text-xl break-words">{item.title}</div>
   <div className="flex justify-center items-center">
     <div className="card__price text-gray-700 text-xl">${item.price}</div>
   </div>
 </div>
 <div className="flex flex-row justify-between px-4">
   <button
     type="button"
     className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
   >
     Add to cart +
   </button>

 </div>
</div>
))}
</div>

  
  </div>
</div>

  );
};
