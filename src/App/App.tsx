import MultStepForm from "../components/Form/Form";
import styles from "./app.module.css";
import PhaseIndicator from "../components/PhaseIndicator/PhaseIndicator";
import StepBar from "../components/StepBar/StepBar";
import { FormContextProvider } from "../hooks/formContext";

function App() {
  return (
    <FormContextProvider>
      <section className={styles.mainContainer}>
        <div className={styles.topContainer}>
          <div className={styles.phaseContainer}>
            <PhaseIndicator id={1}>1</PhaseIndicator>
            <PhaseIndicator id={2}>2</PhaseIndicator>
            <PhaseIndicator id={3}>3</PhaseIndicator>
            <PhaseIndicator id={4}>4</PhaseIndicator>
          </div>
          <MultStepForm />
        </div>
        <StepBar />
      </section>
    </FormContextProvider>
  );
}

export default App;
