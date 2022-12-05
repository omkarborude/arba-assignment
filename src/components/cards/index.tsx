import React, { MouseEventHandler, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import data from "@public/meta.json";
import { cardProp, product } from "@redux/types";
import { addToCart, decrement, increament } from "@redux/reducer/cart/index";
import { useRouter } from "next/router";

export const Cards = (props: cardProp) => {
  const { products, isCart } = props;
  const cart = useSelector((state: any) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();


  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map((item: product) => (
          <div className="card flex flex-col rounded overflow-hidden shadow-lg">
            <img
              className="card__image object-cover h-56 p-4"
              src={item.image}
              alt={item.title}
            />
            <div className="p-2">
              <div className="card__title text-center font-bold text-xl break-words">
                {item.title}
              </div>
              <div className="flex justify-center items-center">
                <div className="card__price text-gray-700 text-xl">
                  ${item.price}
                </div>
              </div>
            </div>
            {isCart ? (
              <div className="flex flex-row h-10  rounded-lg  bg-transparent mt-1 max-w-4 m-2">
                <button
                  disabled={item.quantity == 1}
                  onClick={() => dispatch(decrement(item.id))}
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <p className="p-2">{item.quantity}</p>
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer"
                  onClick={() => dispatch(increament(item.id))}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            ) : (
              <div>
                {cart.find((product: product) => product.id == item.id) ? (
                  <div className="flex flex-row h-10  rounded-lg  bg-transparent mt-1 max-w-4 m-2">
                    <button
                      className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      onClick={() => {
                        router.push("/cart");
                      }}
                    >
                      Go to Cart
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row h-10  rounded-lg  bg-transparent mt-1 max-w-4 m-2">
                    <button
                      className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
