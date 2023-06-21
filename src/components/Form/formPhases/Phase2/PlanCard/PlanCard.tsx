import { useContext, useEffect, useState } from "react";
import styles from "./planCard.module.css";
import { FormContext } from "../../../../../hooks/formContext";

type Props = {
  planName: string;
  planLogo: string;
};

export default function PlanCard({ planName, planLogo }: Props) {
  const [price, setPrice] = useState<number>(0);
  const { formInfo, handlePhase2Select } = useContext(FormContext);

  const isSelected = () => {
    if (planName === formInfo.planName) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    const handlePrice = () => {
      if (planName === "Arcade" && formInfo.planType === "Monthly") {
        setPrice(9);
      } else if (planName === "Arcade" && formInfo.planType === "Yearly") {
        setPrice(90);
      } else if (planName === "Advanced" && formInfo.planType === "Monthly") {
        setPrice(12);
      } else if (planName === "Advanced" && formInfo.planType === "Yearly") {
        setPrice(120);
      } else if (planName === "Pro" && formInfo.planType === "Monthly") {
        setPrice(15);
      } else if (planName === "Pro" && formInfo.planType === "Yearly") {
        setPrice(150);
      }
    };
    handlePrice();
  });

  return (
    <div
      onClick={() => {
        handlePhase2Select(planName, price);
      }}
      className={isSelected() ? styles.planCardContainerSelected : styles.planCardContainer}>
      <img src={planLogo} alt={`${planName} logo`} />
      <div className={styles.planDetailsContainer}>
        <h3 className={styles.planName}>{planName}</h3>
        <p className={styles.planPrice}>{`$${price}/${formInfo.planType === "Monthly" ? "mo" : "yr"}`}</p>
        {formInfo.planType === "Yearly" && <span className={styles.planFreeDisclaimer}>2 months free</span>}
      </div>
    </div>
  );
}
