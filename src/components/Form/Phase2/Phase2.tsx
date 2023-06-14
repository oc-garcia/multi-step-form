import { SetStateAction, useState } from "react";
import { IFormInfo } from "../../../types/IFormInfo";
import styles from "../form.module.css";
import PlanCard from "./PlanCard/PlanCard";
import arcadeLogo from "../../../assets/images/icon-arcade.svg";
import advancedLogo from "../../../assets/images/icon-advanced.svg";
import proLogo from "../../../assets/images/icon-pro.svg";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
};

export default function Phase2({ formInfo, setFormInfo }: Props) {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleIsMonthly = () => {
    if (isMonthly) {
      setIsMonthly(!isMonthly);
      setFormInfo({ ...formInfo, planType: "Yearly" });
    } else {
      setIsMonthly(!isMonthly);
      setFormInfo({ ...formInfo, planType: "Monthly" });
    }
  };

  return (
    <>
      <h2 className={styles.formTitle}>Select your plan</h2>
      <p className={styles.formDescription}>You have the option of monthly or yearly billing</p>
      <PlanCard formInfo={formInfo} setFormInfo={setFormInfo} planName={"Arcade"} planLogo={arcadeLogo} />
      <PlanCard formInfo={formInfo} setFormInfo={setFormInfo} planName={"Advanced"} planLogo={advancedLogo} />
      <PlanCard formInfo={formInfo} setFormInfo={setFormInfo} planName={"Pro"} planLogo={proLogo} />
      <div className={styles.planSelectorContainer}>
        <p className={styles.selectedPlan}>Monthly</p>
        <div
          onClick={handleIsMonthly}
          className={isMonthly ? styles.switchContainerMonthly : styles.switchContainerYearly}>
          <div className={styles.switchBtn}></div>
        </div>
        <p className={styles.unselectedPlan}>Yearly</p>
      </div>
    </>
  );
}
