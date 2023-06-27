import { useContext } from "react";
import styles from "./stepBar.module.css";
import { FormContext } from "../../hooks/formContext";

export default function StepBar() {
  const { phase, handleBackToPhase1, handleBackToPhase2, handleBackToPhase3, handlePhaseSubmit } =
    useContext(FormContext);

  const handleBack = (event: any) => {
    event.preventDefault();
    if (phase.phase2 && !phase.phase1 && !phase.phase3 && !phase.phase4) {
      handleBackToPhase1();
    }
    if (phase.phase3 && !phase.phase1 && !phase.phase2 && !phase.phase4) {
      handleBackToPhase2();
    }
    if (phase.phase4 && !phase.phase1 && !phase.phase2 && !phase.phase3) {
      handleBackToPhase3();
    }
  };

  const handleSubmit = () => {
    handlePhaseSubmit();
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
          <button type="submit" className={styles.nextBtn}>
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
