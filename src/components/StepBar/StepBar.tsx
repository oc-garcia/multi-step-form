import { Iphase } from "../../types/IPhase";
import styles from "./stepBar.module.css";

type Props = {
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
};

export default function StepBar({ phase, setPhase }: Props) {
  const handleNext = () => {
    if (phase.phase1 && phase.phase1Validated) {
      setPhase({ ...phase, phase1: false, phase2: true });
    } else {
      setPhase({ ...phase, phase1Failed: true });
    }
    if (phase.phase2) {
      setPhase({ ...phase, phase2: false, phase3: true });
    }
    if (phase.phase3) {
      setPhase({ ...phase, phase3: false, phase4: true });
    }
  };

  const handleBack = () => {
    if (phase.phase2) {
      setPhase({ ...phase, phase1: true, phase2: false });
    }
    if (phase.phase3) {
      setPhase({ ...phase, phase2: true, phase3: false });
    }
    if (phase.phase4) {
      setPhase({ ...phase, phase3: true, phase4: false });
    }
  };

  const handleSubmit = () => {
    setPhase({ ...phase, submitted: true });
  };
  if (!phase.submitted) {
    return (
      <div className={phase.phase1 ? styles.stepBarContainer1 : styles.stepBarContainer234}>
        {!phase.phase1 && (
          <p onClick={handleBack} className={styles.backBtn}>
            Go Back
          </p>
        )}
        {!phase.phase4 && (
          <p onClick={handleNext} className={styles.nextBtn}>
            Next Step
          </p>
        )}
        {phase.phase4 && (
          <p onClick={handleSubmit} className={styles.submitBtn}>
            Confirm
          </p>
        )}
      </div>
    );
  } else {
    return <div className={styles.stepBarContainerSubmitted}></div>;
  }
}
