import React, { useEffect } from "react";
import { Login } from "@components/login";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getProductsData } from "@redux/reducer/products/index";
import { loginUser } from "@redux/reducer/Auth/index";
import { useRouter } from "next/router";

export const Main: React.FC = () => {
  const Dispatch = useDispatch();
  const router = useRouter();

  const products = useSelector((state: RootStateOrAny) => state?.products);
  const auth = useSelector((state: RootStateOrAny) => state?.auth);

  useEffect(() => {
    Dispatch(getProductsData());
  }, [Dispatch]);

  const onClick = () => {
    const data = {
      username: "kminchelle",
      password: "0lelplR",
    };
    Dispatch(loginUser(data));
  };

  useEffect(() => {
    if (auth.status == "succeeded") {
      router.push("/home");
    }
  }, [auth]);

  console.log(auth.status);
  return (
    <>
      <Login
        name={"ArBa Development Studios"}
        tagline={
          "Providing the Highest Quality Software Development and Testing for Companies of All Sizes"
        }
        login={true}
        onSave={onClick}
      />
    </>
  );
};
