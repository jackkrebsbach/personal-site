import { FC } from "react";
import { Nav } from "../nav/Nav";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.blurb}>
        <h1> Jack Krebsbach </h1>
        <span> Data Science • Web Development </span>
      </div>
      <Nav />
    </header>
  );
};
