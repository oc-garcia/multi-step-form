import React from "react";
import { IFormInfo } from "../../../types/IFormInfo";
import styles from "../form.module.css";
import { Iphase } from "../../../types/IPhase";
import submittedLogo from "../../../assets/images/icon-thank-you.svg";

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
  if (phase.phase4 && !phase.submitted) {
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
  if (phase.submitted) {
    return (
      <div className={styles.submittedContainer}>
        <img className={styles.submittedLogo} src={submittedLogo} alt="Submitted Logo" />
        <h2 className={styles.submittedTitle}>Thank you!</h2>
        <p className={styles.submittedParagraph}>
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support, please feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}
