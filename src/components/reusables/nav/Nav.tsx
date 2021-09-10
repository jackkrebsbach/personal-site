import { FC } from "react";
import styles from "./Nav.module.scss";

export const Nav: FC = () => {
  return (
    <div className={styles.container}>
      <span> Projects </span>
      <span> Resume</span>
      <span>Contact</span>
    </div>
  );
};
