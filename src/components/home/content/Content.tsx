import { FC } from "react";
import { Headshot } from "../headshot/Headshot";
import styles from "./Content.module.scss";

export const Content: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title__container}>
          <h2> Welcome, my name is Jack! </h2>
        </div>
        <span>
          I currently study Math at Hope College in Holland, MI. I use
          data analysis and statistical learning methods to solve problems. I
          also enjoy building web applications, including this one!
        </span>
        <button>
          <span> Download My Resume</span>
        </button>
      </div>
    </div>
  );
};
