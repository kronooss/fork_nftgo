import React from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
