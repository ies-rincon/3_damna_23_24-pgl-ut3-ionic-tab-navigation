import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../../components/Footer";
import TypoGraphy from "../../components/TypoGraphy";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header title="Tab 2" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TypoGraphy name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
