import { IErrors } from "../../types/IErrors";
import { IFormInfo } from "../../types/IFormInfo";
import { Iphase } from "../../types/IPhase";
import styles from "./stepBar.module.css";

type Props = {
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
  errors: IErrors;
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>;
  formInfo: IFormInfo;
};

export default function StepBar({ phase, setPhase, errors, setErrors, formInfo }: Props) {
  const checkErrors = () => {
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
  };

  const handleNext = () => {
    if (phase.phase1 && !phase.phase1Validated) {
      checkErrors();
    } else {
      setPhase((currentState) => ({ ...currentState, phase1Failed: false, phase1: false, phase2: true }));
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
