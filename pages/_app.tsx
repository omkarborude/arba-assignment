import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Container, Header, Footer, Cards } from "@components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
