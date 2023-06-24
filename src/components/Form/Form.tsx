import { useContext, useEffect } from "react";
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
  const { phase, formInfo, handleNextToPhase2 } = useContext(FormContext);
  //
  const promise = (data : any) => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  const onSubmit = (data: any) => {
    handleNextToPhase2(promise(data));
  };

  useEffect(() => {
    console.log(formInfo, phase);
  }, [formInfo, phase]);
  //
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
