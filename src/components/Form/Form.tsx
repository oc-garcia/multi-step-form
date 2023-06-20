import { Iphase } from "../../types/IPhase";
import styles from "./form.module.css";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import Phase3 from "./Phase3/Phase3";
import Phase4 from "./Phase4/Phase4";
import { IErrors } from "../../types/IErrors";
import { IFormInfo } from "../../types/IFormInfo";

type Props = {
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
  errors: IErrors;
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>;
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>;
};

export default function MultStepForm({ phase, setPhase, errors, setErrors, formInfo, setFormInfo }: Props) {
  return (
    <form className={styles.formContainer}>
      {phase.phase1 && (
        <Phase1
          phase={phase}
          setPhase={setPhase}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {phase.phase2 && <Phase2 formInfo={formInfo} setFormInfo={setFormInfo} />}
      {phase.phase3 && <Phase3 formInfo={formInfo} setFormInfo={setFormInfo} />}
      {phase.phase4 && <Phase4 formInfo={formInfo} phase={phase} setPhase={setPhase} />}
    </form>
  );
}
