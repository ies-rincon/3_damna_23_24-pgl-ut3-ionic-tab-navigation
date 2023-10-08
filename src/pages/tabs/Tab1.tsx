import { IonPage } from "@ionic/react";
import Header from "../../components/Footer";
import ContentBody from "../../components/Content";

export default () => (
  <IonPage>
    <Header title="Tab 1" />
    <ContentBody
      content={[
        <h2>Rhinoceros</h2>,
        <img
          alt="rhino standing near grass"
          src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />,
        <p>
          The rhinoceros gets its name from one of its most notable features:
          its horns. The word rhinoceros come from the Greek words rhino meaning
          “nose” and ceros meaning “horn.” The number of horns that a rhino has
          varies on the species. The two African species (the black rhino and
          the white rhino) and the Sumatran rhino have two horns, while the
          Javan rhino and one-horned rhino have one horn.
        </p>,
      ]}
    />
  </IonPage>
);
