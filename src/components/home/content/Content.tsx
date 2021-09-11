import { FC } from "react";
import { Headshot } from "../headshot/Headshot";
import styles from "./Content.module.scss";

export const Content: FC = () => {
  return (
    <div className={styles.container}>
      <Headshot />
      <div className={styles.description}>
        <div className={styles.title__container}>
          <h2> Hi, my name is Jack! </h2>
        </div>
        <span>
          I study Math at Hope College in Holland, MI. I believe that problems
          are best approached by making informed conclusions from data analysis
          and statistical learning methods. I am particulary interested in
          applications of computer vision and machine learning. I also enjoy
          building web applications, including this one!
        </span>
        <button>
          <span> Download My Resume</span>
        </button>
      </div>
    </div>
  );
};
