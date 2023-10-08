import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonFooter>
    <IonToolbar>
      <IonTitle className="ion-text-center">{title}</IonTitle>
    </IonToolbar>
  </IonFooter>
);

export default Header;
