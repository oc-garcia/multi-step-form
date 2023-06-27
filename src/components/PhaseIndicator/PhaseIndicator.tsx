import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./phaseIndicator.module.css";
import { FormContext } from "../../hooks/formContext";

type Props = {
  children: ReactNode;
  id: number;
};

export default function PhaseIndicator({ children, id }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { phase } = useContext(FormContext);
  const handleIndicatorStyle = () => {
    if (phase.phase1 && id == 1) {
      setIsActive(true);
    } else if (phase.phase2 && id == 2) {
      setIsActive(true);
    } else if (phase.phase3 && id == 3) {
      setIsActive(true);
    } else if (phase.phase4 && id == 4) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
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
  useEffect(() => {
    handleIndicatorStyle();
  }, [phase]);
  return (
    <div className={styles.phaseIndicatorContainer}>
      <div className={isActive ? styles.phaseIndicatorActive : styles.phaseIndicatorInactive}>{children}</div>
      <div className={styles.phaseIndicatorDetailsContainer}>
        <h2 className={styles.stepTextIndicator}>{handleStepTextIndicator(id)}</h2>
        <h2 className={styles.title}>{handleTitle(id)}</h2>
      </div>
    </div>
  );
}
