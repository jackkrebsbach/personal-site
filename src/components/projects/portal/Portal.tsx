/* eslint-disable react/jsx-key */
import Image from "next/image";
import styles from "./Portal.module.scss";

interface DisplayPhotos {
  path: string;
  width: string;
  height: string;
  alt: string;
}

interface PortalProps {
  images: DisplayPhotos[];
  title: string;
}

export const Portal = ({ images, title = "Web Development" }: PortalProps) => {
  return (
    <div className={styles.container}>
      <h1> {title}</h1>
      {images.map((element: DisplayPhotos, index) => {
        return (
          <div className={styles.images__container}>
            <Image
              src={element.path}
              alt={element.alt}
              key={index + 1}
              width={element.width}
              height={element.height}
              className={styles.img}
            />
          </div>
        );
      })}
    </div>
  );
};
