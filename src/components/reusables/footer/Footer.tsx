/* eslint-disable react/jsx-no-target-blank */
import { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <span> COPYRIGHT © 2021 JACK KREBSBACH</span>
      <div className={styles.links}>
        <a href="https://github.com/jackkrebsbach" target="_blank">
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jack-krebsbach-8649041b0/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </footer>
  );
};
