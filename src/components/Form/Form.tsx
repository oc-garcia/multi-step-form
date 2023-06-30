import { useContext } from "react";
import styles from "./form.module.css";
import Phase1 from "./formPhases/Phase1/Phase1";
import Phase2 from "./formPhases/Phase2/Phase2";
import Phase3 from "./formPhases/Phase3/Phase3";
import Phase4 from "./formPhases/Phase4/Phase4";
import { FieldErrors, FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormContext } from "../../hooks/formContext";
import StepBar from "../StepBar/StepBar";
import { ZodType, z } from "zod";
import { IPhase1Info } from "../../types/IPhase1Info";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MultStepForm() {
  const schema: ZodType<IPhase1Info> = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    phone: z.string().regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/),
  });
  const methods = useForm({ resolver: zodResolver(schema) });
  const { phase, handleNextToPhase2, handleNextToPhase3, handleNextToPhase4 } = useContext(FormContext);

  const promise = (data: FieldValues) => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  const hasError = (obj: FieldErrors<FieldValues>) => {
    return Object.keys(obj).length !== 0;
  };

  const handleNext = (data: FieldValues) => {
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

  const onSubmit = (data: FieldValues) => {
    handleNext(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.formTag} onSubmit={methods.handleSubmit(onSubmit)}>
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
