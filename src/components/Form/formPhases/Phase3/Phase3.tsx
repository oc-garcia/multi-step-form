import styles from "../../form.module.css";
import AddonCard from "./AddonCard/AddonCard";

export default function Phase3() {
  return (
    <>
      <h2 className={styles.formTitle}>Pick add-ons</h2>
      <p className={styles.formDescription}>Add-ons help enhance your gaming experience</p>
      <AddonCard name={"Online service"} id={"onlineService"} />
      <AddonCard name={"Larger storage"} id={"largerStorage"} />
      <AddonCard name={"Customizable profile"} id={"customizableProfile"} />
    </>
  );
}
