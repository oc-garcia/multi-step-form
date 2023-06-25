import { useContext } from "react";
import styles from "./stepBar.module.css";
import { FormContext } from "../../hooks/formContext";

export default function StepBar({ errors }: any) {
  const {
    phase,
    handleBackToPhase1,
    handleNextToPhase2,
    handleNextToPhase3,
    handleNextToPhase4,
    handleBackToPhase2,
    handleBackToPhase3,
    handlePhaseSubmit,
  } = useContext(FormContext);

  const hasError = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const handleNext = () => {
    if (phase.phase1 && hasError(errors)) {
      console.log(errors);
    } else {
      handleNextToPhase2();
      console.log("handleNextToPhase2");
    }

    if (phase.phase2) {
      handleNextToPhase3();
      console.log("handleNextToPhase3");
    }
    if (phase.phase3) {
      handleNextToPhase4();
      console.log("handleNextToPhase4");
    }
  };

  const handleBack = () => {
    if (phase.phase2) {
      handleBackToPhase1();
    }
    if (phase.phase3) {
      handleBackToPhase2();
    }
    if (phase.phase4) {
      handleBackToPhase3();
    }
  };

  const handleSubmit = () => {
    handlePhaseSubmit;
  };
  if (!phase.submitted) {
    return (
      <div className={phase.phase1 ? styles.stepBarContainer1 : styles.stepBarContainer234}>
        {!phase.phase1 && (
          <button onClick={handleBack} className={styles.backBtn}>
            Go Back
          </button>
        )}
        {!phase.phase4 && (
          <button onClick={handleNext} className={styles.nextBtn}>
            Next Step
          </button>
        )}
        {phase.phase4 && (
          <button onClick={handleSubmit} className={styles.submitBtn}>
            Confirm
          </button>
        )}
      </div>
    );
  } else {
    return <div className={styles.stepBarContainerSubmitted}></div>;
  }
}
