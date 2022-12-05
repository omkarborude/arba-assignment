import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Container, Header,  Cards } from "@components";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const AuthToken =  JSON.parse(localStorage?.getItem('authToken') as string)
    if(!AuthToken){
      router.push('/')
    }
  }, []);

  return (
    <Provider store={store}>

      <div className="h-screen w-full">
     <Header />
      <Component {...pageProps} />
    </div>
    </Provider>
  );
}

export default MyApp;
