import { useState } from "react";
import MultStepForm from "../components/Form/Form";
import styles from "./app.module.css";
import { Iphase } from "../types/IPhase";
import PhaseIndicator from "../components/PhaseIndicator/PhaseIndicator";
import StepBar from "../components/StepBar/StepBar";

const phaseDefault = {
  phase1: true,
  phase2: false,
  phase3: false,
  phase4: false,
  submitted: false,
} as Iphase;

function App() {
  const [phase, setPhase] = useState(phaseDefault);
  return (
    <section className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.phaseContainer}>
          <PhaseIndicator phase={phase.phase1}>1</PhaseIndicator>
          <PhaseIndicator phase={phase.phase2}>2</PhaseIndicator>
          <PhaseIndicator phase={phase.phase3}>3</PhaseIndicator>
          <PhaseIndicator phase={phase.phase4}>4</PhaseIndicator>
        </div>
        <MultStepForm phase={phase} setPhase={setPhase} />
      </div>
      <StepBar phase={phase} setPhase={setPhase} />
    </section>
  );
}

export default App;
