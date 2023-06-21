import { ReactNode, createContext, useState } from "react";
import { IFormInfo } from "../types/IFormInfo";
import { Iphase } from "../types/IPhase";

const formInfoDefault = {
  name: "",
  email: "",
  phone: "",
  planName: "Arcade",
  planType: "Monthly",
  basePrice: 9,
  onlineService: 0,
  largerStorage: 0,
  customizableProfile: 0,
  isMonthly: true,
} as IFormInfo;

const phaseDefault = {
  phase1: true,
  phase1Validated: false,
  phase1Failed: false,
  phase2: false,
  phase3: false,
  phase4: false,
  submitted: false,
} as Iphase;

const formContextDefault = {
  formInfo: formInfoDefault,
  phase: phaseDefault,
};

export const FormContext = createContext(formContextDefault);

type Props = {
  children: ReactNode;
};

export const FormContextProvider = ({ children }: Props) => {
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  const [phase, setPhase] = useState(phaseDefault);

  return <FormContext.Provider value={{ formInfo, phase }}>{children}</FormContext.Provider>;
};
