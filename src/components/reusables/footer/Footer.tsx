/* eslint-disable react/jsx-no-target-blank */
import { FC, useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export const Footer: FC = () => {
  const [d, _] = useState<number>(new Date().getFullYear());
  return (
    <footer className={styles.container}>
      <div className={styles.cv}>
        <span> © {d} </span>
        <span>JACK KREBSBACH</span>
      </div>
      <div className={styles.cv}>
        <span>Looking for My CV? </span>
        <div>
          <span>Click </span>
          <span className={styles.underline}>
            <Link href="/cv.pdf" target="_blank">
              {" "}
              Here
            </Link>
          </span>
        </div>
      </div>
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
