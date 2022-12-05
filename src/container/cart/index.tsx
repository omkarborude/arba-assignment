import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Cards } from "@components/cards";
import { getProductsData } from "@redux/reducer/products/index";

import { Modal } from "@components/modal";

export const Cart: React.FC = () => {
  const Dispatch = useDispatch();
  const cart = useSelector((state:any) => state.cart);

  const [toggleModal, seToggleModal] = useState<boolean>(false);

  const onAccept = () => {
    localStorage.setItem("termTone", JSON.stringify({ accept: "True" }));
    seToggleModal(false);
  };

  const setShowModal = (e: boolean) => {
    seToggleModal(e);
  };

  useEffect(() => {
    Dispatch(getProductsData());
  }, []);

  useEffect(() => {
    const loToken = JSON.parse(localStorage.getItem("termTone") as string);
    if (!loToken) {
      seToggleModal(true);
    }
  }, []);

  console.log(cart)

  return (
    <div className="bg-white">
      <Cards products={cart} isCart={true}/>
    </div>
  );
};


