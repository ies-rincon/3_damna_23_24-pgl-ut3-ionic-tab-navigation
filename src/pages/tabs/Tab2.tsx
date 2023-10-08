import { IonPage } from "@ionic/react";
import Header from "../../components/Footer";
import ContentBody from "../../components/Content";

export default () => (
  <IonPage>
    <Header title="Tab 2" />
    <ContentBody
      content={[
        <h2>Sea Turtle</h2>,
        <img
          alt="brown sea turtle in water"
          src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />,
        <p>
          Sea turtles are characterized by a large, streamlined shell and
          non-retractile head and limbs. Unlike other turtles, sea turtles
          cannot pull their limbs and head inside their shells. Their limbs are
          flippers that are adapted for swimming, so they are vulnerable while
          on land.
        </p>,
      ]}
    />
  </IonPage>
);
