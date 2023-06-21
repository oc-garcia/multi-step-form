import { IFormInfo } from "./IFormInfo";
import { Iphase } from "./IPhase";

export interface IFormContext {
  formInfo: IFormInfo;
  phase: Iphase;
  handleIsMonthly: () => void;
  handlePhase2Select: (name: string, price: number) => void;
  handlePhase3SelectOnlineService: (price: number) => void;
  handlePhase3SelectLargerStorage: (price: number) => void;
  handlePhase3SelectcustomizableProfile: (price: number) => void;
  handlePhase4ChangePlan: () => void;
  handleNextToPhase2: () => void;
  handleNextToPhase3: () => void;
  handleNextToPhase4: () => void;
  handleBackToPhase1: () => void;
  handleBackToPhase2: () => void;
  handleBackToPhase3: () => void;
  handlePhaseSubmit: () => void;
}
