import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Content.module.scss";

export const Content: FC = () => {
  const router = useRouter();

  function handleButtonPress(e: any) {
    e.preventDefault();
    router.push("/resume.pdf");
  }
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title__container}>
          <h2> Hi, I&apos;m Jack! </h2>
        </div>
        <span>
          I currently study Math at Hope College in Holland, MI. I use data
          analysis and statistical learning methods to solve problems. I also
          enjoy learning about software development.
        </span>
        <button onClick={handleButtonPress}>
          <span> View my Resume</span>
        </button>
      </div>
    </div>
  );
};
