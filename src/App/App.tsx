import { useState } from "react";
import MultStepForm from "../components/Form/Form";
import styles from "./app.module.css";
import { Iphase } from "../types/IPhase";
import PhaseIndicator from "../components/PhaseIndicator/PhaseIndicator";
import StepBar from "../components/StepBar/StepBar";
import { IErrors } from "../types/IErrors";
import { IFormInfo } from "../types/IFormInfo";

const phaseDefault = {
  phase1: true,
  phase1Validated: false,
  phase1Failed: false,
  phase2: false,
  phase3: false,
  phase4: false,
  submitted: false,
} as Iphase;

const errorsDefault = {
  name: false,
  email: false,
  phone: false,
} as IErrors;

const formInfoDefault = {
  name: "",
  email: "",
  phone: "",
  planName: "Arcade",
  planType: "Monthly",
  basePrice: 9,
  onlineService: 0,
  largerStorage: 0,
  customizableProfile: 0,
  isMonthly: true,
} as IFormInfo;

function App() {
  const [phase, setPhase] = useState(phaseDefault);
  const [errors, setErrors] = useState(errorsDefault);
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  return (
    <section className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.phaseContainer}>
          <PhaseIndicator phase={phase.phase1}>1</PhaseIndicator>
          <PhaseIndicator phase={phase.phase2}>2</PhaseIndicator>
          <PhaseIndicator phase={phase.phase3}>3</PhaseIndicator>
          <PhaseIndicator phase={phase.phase4}>4</PhaseIndicator>
        </div>
        <MultStepForm
          phase={phase}
          setPhase={setPhase}
          errors={errors}
          setErrors={setErrors}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
        />
      </div>
      <StepBar phase={phase} setPhase={setPhase} errors={errors} setErrors={setErrors} formInfo={formInfo} />
    </section>
  );
}

export default App;
