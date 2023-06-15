import React, { SetStateAction } from "react";
import { IFormInfo } from "../../../types/IFormInfo";
import styles from "../form.module.css";
import AddonCard from "./AddonCard/AddonCard";

type Props = {
  formInfo: IFormInfo;
  setFormInfo: React.Dispatch<SetStateAction<IFormInfo>>;
};

export default function Phase3({ formInfo, setFormInfo }: Props) {

  return (
    <>
      <h2 className={styles.formTitle}>Pick add-ons</h2>
      <p className={styles.formDescription}>Add-ons help enhance your gaming experience</p>
      <AddonCard formInfo={formInfo} setFormInfo={setFormInfo} name={"Online service"} id={"onlineService"} />
      <AddonCard formInfo={formInfo} setFormInfo={setFormInfo} name={"Larger storage"} id={"largerStorage"} />
      <AddonCard
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        name={"Customizable profile"}
        id={"customizableProfile"}
      />
    </>
  );
}
