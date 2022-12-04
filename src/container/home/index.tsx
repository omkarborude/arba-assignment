import React, { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Cards } from "@components/cards";
import { getProductsData } from "@redux/reducer/products/index";

export const Home: React.FC = () => {
    const Dispatch = useDispatch();
    const products = useSelector((state: RootStateOrAny) => state?.products);

    useEffect(() => {
        Dispatch(getProductsData());
      }, [Dispatch]);

      
    return (
            <Cards products={products.products}/>
    )

}