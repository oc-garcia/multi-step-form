import React from "react";
import { IFormInfo } from "../../../types/IFormInfo";
import styles from "../form.module.css";
import { Iphase } from "../../../types/IPhase";

type Props = {
  formInfo: IFormInfo;
  phase: Iphase;
  setPhase: React.Dispatch<React.SetStateAction<Iphase>>;
};

export default function Phase4({ formInfo, phase, setPhase }: Props) {
  const getTotal = () => {
    const total = formInfo.basePrice + formInfo.onlineService + formInfo.largerStorage + formInfo.customizableProfile;
    return total;
  };
  return (
    <>
      <h2 className={styles.formTitle}>Finishing up</h2>
      <p className={styles.formDescription}>Double-check everything looks OK before confirming.</p>
      <ul className={styles.listContainer}>
        <li className={styles.listItemMainContainer}>
          <div>
            <h3 className={styles.listItemMainName}>
              {formInfo.planName} ({formInfo.planType})
            </h3>
            <p
              onClick={() => setPhase({ ...phase, phase2: true, phase4: false })}
              className={styles.listItemChangePlan}>
              Change
            </p>
          </div>
          <p className={styles.listItemMainPrice}>
            ${formInfo.basePrice}/{formInfo.planType === "Monthly" ? "mo" : "yr"}
          </p>
        </li>
        {formInfo.onlineService != 0 && (
          <li className={styles.listItemContainer}>
            <p className={styles.listItemAddonName}>Online service</p>
            <p className={styles.listItemAddonPrice}>
              +${formInfo.onlineService}/{formInfo.planType === "Monthly" ? "mo" : "yr"}
            </p>
          </li>
        )}
        {formInfo.largerStorage != 0 && (
          <li className={styles.listItemContainer}>
            <p className={styles.listItemAddonName}>Larger storage</p>
            <p className={styles.listItemAddonPrice}>
              +${formInfo.largerStorage}/{formInfo.planType === "Monthly" ? "mo" : "yr"}
            </p>
          </li>
        )}
        {formInfo.customizableProfile != 0 && (
          <li className={styles.listItemContainer}>
            <p className={styles.listItemAddonName}>Customizable profile</p>
            <p className={styles.listItemAddonPrice}>
              +${formInfo.customizableProfile}/{formInfo.planType === "Monthly" ? "mo" : "yr"}
            </p>
          </li>
        )}
        <li className={styles.listItemContainerTotal}>
          <p className={styles.listItemTotalName}>
            Total ({formInfo.planType === "Monthly" ? "per month" : "per year"})
          </p>
          <p className={styles.listItemTotalPrice}>
            +${getTotal()}/{formInfo.planType === "Monthly" ? "mo" : "yr"}
          </p>
        </li>
      </ul>
    </>
  );
}
