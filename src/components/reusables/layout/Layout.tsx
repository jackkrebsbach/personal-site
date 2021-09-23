import React, { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./Layout.module.scss";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Jack Krebsbach" }: Props) => (
  <div className="main-container">
    <Header title={title} />
    <div className={styles.container}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
