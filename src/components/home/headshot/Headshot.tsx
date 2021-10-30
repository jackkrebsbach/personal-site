import styles from "./Headshot.module.scss";
import Image from "next/image";
import img from "../../../../public/headshot/headshot.jpg";
import { FC } from "react";

export const Headshot: FC = () => {
  return (
    <div className={styles.headshot__container}>
      <Image
        src={img}
        alt="headshot"
        placeholder="blur"
        className={styles.headshot}
        priority
      />
    </div>
  );
};
