import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className="spinner__container">
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}

export default Spinner;
