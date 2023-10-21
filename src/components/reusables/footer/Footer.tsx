/* eslint-disable react/jsx-no-target-blank */
import { FC, useState } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const [d, _] = useState<number>(new Date().getFullYear());
  return (
    <footer className={styles.container}>
      <span> © {d} JACK KREBSBACH</span>
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
