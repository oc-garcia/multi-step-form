import React, { SetStateAction } from "react";
import { IFormInfo } from "../../../../types/IFormInfo";
import styles from "./planCard.module.css";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
  planName: string;
  planLogo: string;
};

export default function PlanCard({ formInfo, setFormInfo, planName, planLogo }: Props) {
  const price = () => {
    if (planName === "Arcade") {
      return 9;
    } else if (planName === "Advanced") {
      return 12;
    } else if (planName === "Pro") {
      return 15;
    }
  };

  return (
    <div className={styles.planCardContainer}>
      <img src={planLogo} alt={`${planName} logo`} />
      <div>
        <h3 className={styles.planName}>{planName}</h3>
        <p className={styles.planPrice}>{`$${price()}/mo`}</p>
      </div>
    </div>
  );
}
