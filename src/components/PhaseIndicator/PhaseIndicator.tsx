import { ReactNode, useEffect } from "react";
import styles from "./phaseIndicator.module.css";

type Props = {
  phase: boolean;
  children: ReactNode;
  id: number;
};

export default function PhaseIndicator({ children, id, phase }: Props) {
  const handleTitle = (prmt: number) => {
    if (prmt === 1) {
      return "YOUR INFO";
    }
    if (prmt === 2) {
      return "SELECT PLAN";
    }
    if (prmt === 3) {
      return "ADD-ONS";
    }
    if (prmt === 4) {
      return "SUMMARY";
    }
  };
  const handleStepTextIndicator = (prmt: number) => {
    if (prmt === 1) {
      return "STEP 1";
    }
    if (prmt === 2) {
      return "STEP 2";
    }
    if (prmt === 3) {
      return "STEP 3";
    }
    if (prmt === 4) {
      return "STEP ";
    }
  };

  useEffect(() => {console.log("Render")}, [phase]);
  return (
    <div className={styles.phaseIndicatorContainer}>
      <div className={phase ? styles.phaseIndicatorActive : styles.phaseIndicatorInactive}>{children}</div>
      <div className={styles.phaseIndicatorDetailsContainer}>
        <h2 className={styles.stepTextIndicator}>{handleStepTextIndicator(id)}</h2>
        <h2 className={styles.title}>{handleTitle(id)}</h2>
      </div>
    </div>
  );
}
