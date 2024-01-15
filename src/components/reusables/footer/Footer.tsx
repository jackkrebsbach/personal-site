/* eslint-disable react/jsx-no-target-blank */
import { FC, useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export const Footer: FC = () => {
  const [d, _] = useState<number>(new Date().getFullYear());
  return (
    <footer className={styles.container}>
      <span> © {d} JACK KREBSBACH</span>
      <span>
        Looking for My CV? Click{" "}
        <span className={styles.underline}>
          <Link href="/cv.pdf" target="_blank">
            {" "}
            Here
          </Link>
        </span>
      </span>
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
