import { SetStateAction } from "react";
import { IFormInfo } from "../../../../types/IFormInfo";
import styles from "./addonCard.module.css";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
  name: string;
  id: string;
};

export default function AddonCard({ formInfo, setFormInfo, name, id }: Props) {
  const handleDescription = () => {
    if (name === "Online service") {
      return "Access to multiplayer games";
    } else if (name === "Larger storage") {
      return "Extra 1TB of cloud save";
    } else if (name === "Customizable profile") {
      return "Custom theme on your profile";
    }
  };
  return (
    <label id={`${id}`} className={styles.checkboxContainer}>
      <div className={styles.addonCardContainer}>
        <input className={styles.checkbox} type="checkbox" name={`${id}`} id={`${id}`} />
        <span className={styles.checkmark}></span>

        <div className={styles.addonDetailsContainer}>
          <h3 className={styles.addonName}>{name}</h3>
          <p className={styles.addonDescription}>{handleDescription()}</p>
        </div>
        <p className={styles.addonPrice}>+$1/mo</p>
      </div>
    </label>
  );
}
