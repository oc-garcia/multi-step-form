import styles from "../../form.module.css";
import PlanCard from "./PlanCard/PlanCard";
import arcadeLogo from "../../../../assets/images/icon-arcade.svg";
import advancedLogo from "../../../../assets/images/icon-advanced.svg";
import proLogo from "../../../../assets/images/icon-pro.svg";
import { useContext } from "react";
import { FormContext } from "../../../../hooks/formContext";

export default function Phase2() {
  const { formInfo, handleIsMonthly } = useContext(FormContext);
  return (
    <>
      <h2 className={styles.formTitle}>Select your plan</h2>
      <p className={styles.formDescription}>You have the option of monthly or yearly billing</p>
      <PlanCard planName={"Arcade"} planLogo={arcadeLogo} />
      <PlanCard planName={"Advanced"} planLogo={advancedLogo} />
      <PlanCard planName={"Pro"} planLogo={proLogo} />
      <div className={styles.planSelectorContainer}>
        <p className={formInfo.planType === "Monthly" ? styles.selectedPlan : styles.unselectedPlan}>Monthly</p>
        <div
          onClick={() => handleIsMonthly()}
          className={formInfo.isMonthly === true ? styles.switchContainerMonthly : styles.switchContainerYearly}>
          <div className={styles.switchBtn}></div>
        </div>
        <p className={formInfo.planType === "Yearly" ? styles.selectedPlan : styles.unselectedPlan}>Yearly</p>
      </div>
    </>
  );
}
