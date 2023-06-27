import { useContext } from "react";
import styles from "./form.module.css";
import Phase1 from "./formPhases/Phase1/Phase1";
import Phase2 from "./formPhases/Phase2/Phase2";
import Phase3 from "./formPhases/Phase3/Phase3";
import Phase4 from "./formPhases/Phase4/Phase4";
import { FormProvider, useForm } from "react-hook-form";
import { FormContext } from "../../hooks/formContext";
import StepBar from "../StepBar/StepBar";

export default function MultStepForm() {
  const methods = useForm();
  const { phase, handleNextToPhase2, handleNextToPhase3, handleNextToPhase4 } = useContext(FormContext);

  const promise = (data: any) => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  const hasError = (obj: any) => {
    return Object.keys(obj).length !== 0;
  };

  const handleNext = (data: any) => {
    if (phase.phase1 && !hasError(methods.formState.errors) && !phase.phase2 && !phase.phase3 && !phase.phase4) {
      handleNextToPhase2(promise(data));
    }

    if (phase.phase2 && !phase.phase1 && !phase.phase3 && !phase.phase4) {
      handleNextToPhase3();
    }
    if (phase.phase3 && !phase.phase1 && !phase.phase2 && !phase.phase4) {
      handleNextToPhase4();
    }
  };

  const onSubmit = (data: any) => {
    handleNext(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
          {phase.phase1 && <Phase1 />}
          {phase.phase2 && <Phase2 />}
          {phase.phase3 && <Phase3 />}
          {phase.phase4 && <Phase4 />}
        </div>
        <StepBar />
      </form>
    </FormProvider>
  );
}
