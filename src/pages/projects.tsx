import styles from "../styles/Projects.module.scss";

export default function projects() {
  function handleSoftwareClick(e: any) {
    e.preventDefault();
    window.open("/projects/software.pdf", "_blank");
  }
  function handleDataClick(e: any) {
    e.preventDefault();
    window.open("/projects/data-science.pdf", "_blank");
  }
  return (
    <div className={styles.container}>
      <div className={styles.header__wrapper}>
        <h2> Web Development </h2>
      </div>

      <button id="software" onClick={handleSoftwareClick}>
        <span>ENTER</span>
      </button>
      <div className={styles.header__wrapper}>
        <h2> Data Science </h2>
      </div>
      <button id="data-science" onClick={handleDataClick}>
        <span>ENTER</span>
      </button>
    </div>
  );
}
