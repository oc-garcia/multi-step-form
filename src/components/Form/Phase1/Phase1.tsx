import { SetStateAction, useEffect, useState } from "react";
import { IFormInfo } from "../../../types/IFormInfo";
import styles from "../form.module.css";
import { Iphase } from "../../../types/IPhase";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
};

const errorsDefault = {
  name: false,
  email: false,
  phone: false,
};

export default function Phase1({ formInfo, setFormInfo, phase, setPhase }: Props) {
  const [errors, setErrors] = useState(errorsDefault);

  const checkErrors = () => {
    if (phase.phase1Failed) {
      if (formInfo.name.length < 3) {
        setErrors((currentState) => ({ ...currentState, name: true }));
      } else {
        setErrors((currentState) => ({ ...currentState, name: false }));
      }

      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formInfo.email)) {
        setErrors((currentState) => ({ ...currentState, email: false }));
      } else {
        setErrors((currentState) => ({ ...currentState, email: true }));
      }

      if (formInfo.phone.length < 9 && formInfo.phone.length < 12) {
        setErrors((currentState) => ({ ...currentState, phone: true }));
      } else {
        setErrors((currentState) => ({ ...currentState, phone: false }));
      }

      if (errors.name === false && errors.phone === false && errors.email === false) {
        setPhase({ ...phase, phase1Validated: true });
      }
    }
  };

  useEffect(() => {
    setPhase((currentState) => ({ ...currentState, phase1Validated: false }));
  }, []);

  useEffect(() => {
    checkErrors();
  }, [phase]);

  console.log(errors, errorsDefault);
  return (
    <>
      <h2 className={styles.formTitle}>Personal info</h2>
      <p className={styles.formDescription}>Please provide your name, email address, and phone number.</p>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          {errors.name && <span className={styles.errorMessage}>Invalid name</span>}
        </div>
        <input
          className={styles.input}
          id="name"
          type="text"
          value={formInfo.name}
          placeholder="e.g. Stephen King"
          onChange={(e) => {
            setFormInfo({ ...formInfo, name: e.target.value });
          }}
          onBlur={() => {
            if (formInfo.name.length < 3) {
              setErrors((currentState) => ({ ...currentState, name: true }));
            } else {
              setErrors((currentState) => ({ ...currentState, name: false }));
            }
          }}
          onFocus={() => {
            setErrors((currentState) => ({ ...currentState, name: false }));
          }}
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          {errors.email && <span className={styles.errorMessage}>Invalid email</span>}
        </div>
        <input
          className={styles.input}
          id="email"
          type="email"
          value={formInfo.email}
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => {
            setFormInfo({ ...formInfo, email: e.target.value });
          }}
          onBlur={() => {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formInfo.email)) {
              setErrors((currentState) => ({ ...currentState, email: false }));
            } else {
              setErrors((currentState) => ({ ...currentState, email: true }));
            }
          }}
          onFocus={() => {
            setErrors((currentState) => ({ ...currentState, email: false }));
          }}
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor="phone">
            Phone Number
          </label>
          {errors.phone && <span className={styles.errorMessage}>Invalid phone number</span>}
        </div>
        <input
          className={styles.input}
          id="phone"
          type="number"
          value={formInfo.phone}
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => {
            setFormInfo({ ...formInfo, phone: e.target.value });
          }}
          onBlur={() => {
            if (formInfo.phone.length < 9 && formInfo.phone.length < 12) {
              setErrors((currentState) => ({ ...currentState, phone: true }));
            } else {
              setErrors((currentState) => ({ ...currentState, phone: false }));
            }
          }}
          onFocus={() => {
            setErrors((currentState) => ({ ...currentState, phone: false }));
          }}
        />
      </div>
    </>
  );
}
