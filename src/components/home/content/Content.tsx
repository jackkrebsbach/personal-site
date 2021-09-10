import { FC } from "react";
import { Headshot } from "../headshot/Headshot";
import styles from "./Content.module.scss";

export const Content: FC = () => {
  return (
    <div className={styles.container}>
      <Headshot />
      <div className={styles.description}>
        <span>
          <strong> Hi, my name is Jack! </strong> <br /> <br /> I currently
          study Math with a focus on data science at Hope College in Holland,
          MI. I enjoy solving problems using a data driven approach. I
          particulary enjoy using computer vision and machine learning. I also
          build single page web applications.
        </span>
        <button>
          <span> Download My Resume</span>{" "}
        </button>
      </div>
    </div>
  );
};
