import { SetStateAction } from "react";
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
  const handleIsMonthly = () => {
    if (formInfo.isMonthly) {
      setFormInfo({
        ...formInfo,
        planType: "Yearly",
        basePrice: formInfo.basePrice * 10,
        isMonthly: false,
        onlineService: formInfo.onlineService * 10,
        largerStorage: formInfo.largerStorage * 10,
        customizableProfile: formInfo.customizableProfile * 10,
      });
    } else {
      setFormInfo({
        ...formInfo,
        planType: "Monthly",
        basePrice: formInfo.basePrice / 10,
        isMonthly: true,
        onlineService: formInfo.onlineService / 10,
        largerStorage: formInfo.largerStorage / 10,
        customizableProfile: formInfo.customizableProfile / 10,
      });
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
