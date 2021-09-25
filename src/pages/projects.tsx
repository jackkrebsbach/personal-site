import { ImageComparator } from "../components/reusables/image-comparator/ImageComparator";
import Layout from "../components/reusables/layout/Layout";
import styles from "../styles/Projects.module.scss";

export default function projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <span> Web Development </span>
        <span> Data Science </span>
        <ImageComparator
          topImage="/projects/r.png"
          bottomImage="/projects/research.png"
          width={300}
          height={100}
          vertical={false}
        />
      </div>
    </Layout>
  );
}
