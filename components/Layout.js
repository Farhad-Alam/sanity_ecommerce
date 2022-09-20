import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Modal from "./Modal";
import { useStateContext } from "../context/StateContext";
import ProductModal from "./ProductModal";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { showModal } = useStateContext();
  return (
    <div>
      <Head>
        <title>ShopStack Store</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>

      {showModal && <ProductModal />}
    </div>
  );
};

export default Layout;
