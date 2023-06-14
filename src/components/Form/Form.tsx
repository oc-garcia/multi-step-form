import { useState } from "react";
import { IFormInfo } from "../../types/IFormInfo";
import { Iphase } from "../../types/IPhase";
import styles from "./form.module.css";

const formInfoDefault = {
  name: "",
  email: "",
  phone: "",
} as IFormInfo;

type Props = {
  phase: Iphase;
};

export default function MultStepForm({ phase }: Props) {
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  return (
    <form className={styles.formContainer}>
      {phase.phase1 && (
        <>
          <h2 className={styles.formTitle}>Personal info</h2>
          <p className={styles.formDescription}>Please provide your name, email address, and phone number.</p>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              value={formInfo.name}
              placeholder="e.g. Stephen King"
              onChange={(e) => {
                setFormInfo({ ...formInfo, name: e.target.value });
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              value={formInfo.email}
              placeholder="e.g. stephenking@lorem.com"
              onChange={(e) => {
                setFormInfo({ ...formInfo, email: e.target.value });
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              className={styles.input}
              id="phone"
              type="number"
              value={formInfo.phone}
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => {
                setFormInfo({ ...formInfo, phone: e.target.value });
              }}
            />
          </div>
        </>
      )}
    </form>
  );
}
