import { IonText } from "@ionic/react";

const TypoGraphy: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <IonText color="primary">{children}</IonText>
);

export default TypoGraphy;
