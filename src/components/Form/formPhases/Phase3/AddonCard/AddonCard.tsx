import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import styles from "./addonCard.module.css";
import { FormContext } from "../../../../../hooks/formContext";

type Props = {
  name: string;
  id: string;
};

export default function AddonCard({ name, id }: Props) {
  const {
    formInfo,
    handlePhase3SelectOnlineService,
    handlePhase3SelectLargerStorage,
    handlePhase3SelectcustomizableProfile,
  } = useContext(FormContext);

  const handleDescription = () => {
    if (name === "Online service") {
      return "Access to multiplayer games";
    } else if (name === "Larger storage") {
      return "Extra 1TB of cloud save";
    } else if (name === "Customizable profile") {
      return "Custom theme on your profile";
    }
  };

  const handleChecked = () => {
    if (name === "Online service" && formInfo.onlineService != 0) {
      return true;
    } else if (name === "Larger storage" && formInfo.largerStorage != 0) {
      return true;
    } else if (name === "Customizable profile" && formInfo.customizableProfile != 0) {
      return true;
    } else {
      return false;
    }
  };

  const [price, setPrice] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(handleChecked);

  useEffect(() => {
    const handlePrice = () => {
      if (name === "Online service" && formInfo.planType === "Monthly") {
        setPrice(1);
      } else if (name === "Online service" && formInfo.planType === "Yearly") {
        setPrice(10);
      } else if (name === "Larger storage" && formInfo.planType === "Monthly") {
        setPrice(2);
      } else if (name === "Larger storage" && formInfo.planType === "Yearly") {
        setPrice(20);
      } else if (name === "Customizable profile" && formInfo.planType === "Monthly") {
        setPrice(2);
      } else if (name === "Customizable profile" && formInfo.planType === "Yearly") {
        setPrice(20);
      }
    };
    handlePrice();
  });
  return (
    <label
      onChange={(e: BaseSyntheticEvent) => {
        if (e.target.checked) {
          setIsChecked(true);
          if (id === "onlineService") {
            handlePhase3SelectOnlineService(price);
          } else if (id === "largerStorage") {
            handlePhase3SelectLargerStorage(price);
          } else if (id === "customizableProfile") {
            handlePhase3SelectcustomizableProfile(price);
          }
        } else {
          setIsChecked(false);
          if (id === "onlineService") {
            handlePhase3SelectOnlineService(0);
          } else if (id === "largerStorage") {
            handlePhase3SelectLargerStorage(0);
          } else if (id === "customizableProfile") {
            handlePhase3SelectcustomizableProfile(0);
          }
        }
      }}
      id={`${id}`}
      className={styles.checkboxContainer}>
      <div className={isChecked ? styles.addonCardContainerSelected : styles.addonCardContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={`${id}`}
          id={`${id}`}
          defaultChecked={handleChecked()}
        />
        <span className={styles.checkmark}></span>

        <div className={styles.addonDetailsContainer}>
          <h3 className={styles.addonName}>{name}</h3>
          <p className={styles.addonDescription}>{handleDescription()}</p>
        </div>
        <p className={styles.addonPrice}>{`+$${price}/${formInfo.planType === "Monthly" ? "mo" : "yr"}`}</p>
      </div>
    </label>
  );
}
