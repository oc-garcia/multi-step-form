import { useState } from "react";
import { IFormInfo } from "../types/IFormInfo";

const formInfoDefault = {
  name: "",
  email: "",
  phone: "",
} as IFormInfo;

export default function MultStepForm() {
  const [phase, setPhase] = useState<number>(1);
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  return (
    <form>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={formInfo.name}
        onChange={(e) => {
          setFormInfo({ ...formInfo, name: e.target.value });
        }}
      />
      <p>{formInfo.name}</p>
    </form>
  );
}
