import { useContext } from "react";
import styles from "./form.module.css";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import Phase3 from "./Phase3/Phase3";
import Phase4 from "./Phase4/Phase4";
import { FormProvider, useForm } from "react-hook-form";
import { FormContext } from "../../hooks/formContext";

export default function MultStepForm() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  const { phase } = useContext(FormContext);
  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer} onSubmit={methods.handleSubmit(onSubmit)}>
        {phase.phase1 && <Phase1 />}
        {phase.phase2 && <Phase2 />}
        {phase.phase3 && <Phase3 />}
        {phase.phase4 && <Phase4 />}
      </form>
    </FormProvider>
  );
}
