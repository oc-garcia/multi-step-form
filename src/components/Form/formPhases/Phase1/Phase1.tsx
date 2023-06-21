import styles from "../../form.module.css";

export default function Phase1() {
  return (
    <>
      <h2 className={styles.formTitle}>Personal info</h2>
      <p className={styles.formDescription}>Please provide your name, email address, and phone number.</p>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <span className={styles.errorMessage}>Invalid name</span>
        </div>
        <input className={styles.input} id="name" type="text" placeholder="e.g. Stephen King" />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <span className={styles.errorMessage}>Invalid email</span>
        </div>
        <input className={styles.input} id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="phone">
            Phone Number
          </label>
          <span className={styles.errorMessage}>Invalid phone number</span>
        </div>
        <input className={styles.input} id="phone" type="number" placeholder="e.g. +1 234 567 890" />
      </div>
    </>
  );
}
