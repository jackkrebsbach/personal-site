import Layout from "../components/reusables/layout/Layout";
import styles from "../styles/Projects.module.scss";

export default function projects() {
  function handleClick(e: any) {
    e.preventDefault();
    window.open(`/projects/${e.target.id}.pdf`, "_blank");
  }
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <h2> Web Development </h2>
        </div>

        <button id="software" onClick={handleClick}>
          <span>ENTER</span>
        </button>
        <div className={styles.header__wrapper}>
          <h2> Data Science </h2>
        </div>
        <button id="data-science" onClick={handleClick}>
          <span>ENTER</span>
        </button>
      </div>
    </Layout>
  );
}
