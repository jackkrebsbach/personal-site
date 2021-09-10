import { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <span> @ COPYRIGHT JACK KREBSACH</span>
      <div className={styles.links}>
        <span> GitHub</span>
        <span> LinkedIn</span>
      </div>
    </footer>
  );
};
