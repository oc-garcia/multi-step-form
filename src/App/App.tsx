import MultStepForm from "../components/Form/Form";
import styles from "./app.module.css";
import PhaseIndicator from "../components/PhaseIndicator/PhaseIndicator";
import StepBar from "../components/StepBar/StepBar";
import { FormContext, FormContextProvider } from "../hooks/formContext";
import { useContext } from "react";

function App() {
  const { phase } = useContext(FormContext);
  return (
    <FormContextProvider>
      <section className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <div className={styles.phaseContainer}>
            <PhaseIndicator phase={phase.phase1} id={1}>
              1
            </PhaseIndicator>
            <PhaseIndicator phase={phase.phase2} id={2}>
              2
            </PhaseIndicator>
            <PhaseIndicator phase={phase.phase3} id={3}>
              3
            </PhaseIndicator>
            <PhaseIndicator phase={phase.phase4} id={4}>
              4
            </PhaseIndicator>
          </div>
          <MultStepForm />
        </div>
        {/*<StepBar />*/}
      </section>
    </FormContextProvider>
  );
}

export default App;
