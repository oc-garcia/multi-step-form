import { ReactNode, createContext, useState } from "react";
import { IFormInfo } from "../types/IFormInfo";
import { Iphase } from "../types/IPhase";
import { IFormContext } from "../types/IIFormContext";

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
  phase1Failed: false,
  phase2: false,
  phase3: false,
  phase4: false,
  submitted: false,
} as Iphase;

const formContextDefault = {
  formInfo: formInfoDefault,
  phase: phaseDefault,
} as IFormContext;

export const FormContext = createContext(formContextDefault);

type Props = {
  children: ReactNode;
};

export const FormContextProvider = ({ children }: Props) => {
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  const [phase, setPhase] = useState(phaseDefault);

  const handleIsMonthly = () => {
    if (formInfo.isMonthly) {
      setFormInfo({
        ...formInfo,
        planType: "Yearly",
        basePrice: formInfo.basePrice * 10,
        isMonthly: false,
        onlineService: formInfo.onlineService * 10,
        largerStorage: formInfo.largerStorage * 10,
        customizableProfile: formInfo.customizableProfile * 10,
      });
    } else {
      setFormInfo({
        ...formInfo,
        planType: "Monthly",
        basePrice: formInfo.basePrice / 10,
        isMonthly: true,
        onlineService: formInfo.onlineService / 10,
        largerStorage: formInfo.largerStorage / 10,
        customizableProfile: formInfo.customizableProfile / 10,
      });
    }
  };

  const handlePhase2Select = (planName: string, price: number) => {
    setFormInfo({ ...formInfo, planName: planName, basePrice: price });
  };

  const handlePhase3SelectOnlineService = (price: number) => {
    setFormInfo({ ...formInfo, onlineService: price });
  };

  const handlePhase3SelectLargerStorage = (price: number) => {
    setFormInfo({ ...formInfo, largerStorage: price });
  };

  const handlePhase3SelectcustomizableProfile = (price: number) => {
    setFormInfo({ ...formInfo, customizableProfile: price });
  };

  const handlePhase4ChangePlan = () => {
    setPhase({ ...phase, phase2: true, phase4: false });
  };

  async function handleNextToPhase2(data: any) {
    const response = await data;
    setFormInfo({
      ...formInfo,
      name: response?.name,
      email: response?.email,
      phone: response?.phone,
    });
    setPhase({ ...phase, phase1: false, phase2: true });
  }

  const handleNextToPhase3 = () => {
    setPhase({ ...phase, phase2: false, phase3: true });
  };

  const handleNextToPhase4 = () => {
    setPhase({ ...phase, phase3: false, phase4: true });
  };

  const handleBackToPhase1 = () => {
    setPhase({ ...phase, phase1: true, phase2: false });
  };

  const handleBackToPhase2 = () => {
    setPhase({ ...phase, phase2: true, phase3: false });
  };

  const handleBackToPhase3 = () => {
    setPhase({ ...phase, phase3: true, phase4: false });
  };

  const handlePhaseSubmit = () => {
    setPhase({ ...phase, submitted: true });
  };

  return (
    <FormContext.Provider
      value={{
        formInfo,
        phase,
        handleIsMonthly,
        handlePhase2Select,
        handlePhase3SelectOnlineService,
        handlePhase3SelectLargerStorage,
        handlePhase3SelectcustomizableProfile,
        handlePhase4ChangePlan,
        handleNextToPhase2,
        handleNextToPhase3,
        handleNextToPhase4,
        handleBackToPhase1,
        handleBackToPhase2,
        handleBackToPhase3,
        handlePhaseSubmit,
      }}>
      {children}
    </FormContext.Provider>
  );
};
