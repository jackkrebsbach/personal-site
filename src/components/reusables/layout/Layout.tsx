import React, { ReactNode } from "react";
import Head from "next/head";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Jack Krebsbach" }: Props) => (
  <div className="main-container">
    <Header title={title} />
    {children}
    <Footer />
  </div>
);

export default Layout;
