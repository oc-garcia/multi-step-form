import { ReactNode } from "react";
import styles from "./phaseIndicator.module.css";

type Props = {
  children: ReactNode;
  phase: boolean;
};

export default function PhaseIndicator({ children, phase }: Props) {
  return <div className={phase ? styles.phaseIndicatorActive : styles.phaseIndicatorInactive}>{children}</div>;
}
