import React, { SetStateAction, useEffect, useState } from "react";
import { IFormInfo } from "../../../../types/IFormInfo";
import styles from "./planCard.module.css";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
  planName: string;
  planLogo: string;
};

export default function PlanCard({ formInfo, setFormInfo, planName, planLogo }: Props) {
  const [price, setPrice] = useState<number>(0);

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
        setFormInfo({ ...formInfo, planName: planName, basePrice: price });
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
