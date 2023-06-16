import { useState } from "react";
import { IFormInfo } from "../../types/IFormInfo";
import { Iphase } from "../../types/IPhase";
import styles from "./form.module.css";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import Phase3 from "./Phase3/Phase3";
import Phase4 from "./Phase4/Phase4";

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

type Props = {
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
};

export default function MultStepForm({ phase, setPhase }: Props) {
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  return (
    <form className={styles.formContainer}>
      {phase.phase1 && <Phase1 formInfo={formInfo} setFormInfo={setFormInfo} />}
      {phase.phase2 && <Phase2 formInfo={formInfo} setFormInfo={setFormInfo} />}
      {phase.phase3 && <Phase3 formInfo={formInfo} setFormInfo={setFormInfo} />}
      {phase.phase4 && <Phase4 formInfo={formInfo} phase={phase} setPhase={setPhase} />}
    </form>
  );
}
