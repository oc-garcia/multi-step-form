import { useFormContext } from "react-hook-form";
import styles from "../../form.module.css";

export default function Phase1() {
  const methods = useFormContext();
  return (
    <>
      <h2 className={styles.formTitle}>Personal info</h2>
      <p className={styles.formDescription}>Please provide your name, email address, and phone number.</p>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          {methods.formState.errors?.name && (
            <span className={styles.errorMessage}>{String(methods.formState.errors.name?.message)}</span>
          )}
        </div>
        <input
          className={methods.formState.errors?.name ? styles.inputError : styles.input}
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          {...methods.register("name")}
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          {methods.formState.errors?.email && (
            <span className={styles.errorMessage}>{String(methods.formState.errors.email?.message)}</span>
          )}
        </div>
        <input
          className={methods.formState.errors?.email ? styles.inputError : styles.input}
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          {...methods.register("email")}
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="phone">
            Phone Number
          </label>
          {methods.formState.errors?.phone && (
            <span className={styles.errorMessage}>{String(methods.formState.errors.phone?.message)}</span>
          )}
        </div>
        <input
          className={methods.formState.errors?.phone ? styles.inputError : styles.input}
          id="phone"
          type="number"
          placeholder="e.g. +1 234 567 890"
          {...methods.register("phone")}
        />
      </div>
    </>
  );
}
