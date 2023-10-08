import { IonPage } from "@ionic/react";
import Header from "../../components/Footer";
import ContentBody from "../../components/Content";

export default () => (
  <IonPage>
    <Header title="Tab 3" />
    <ContentBody
      content={[
        <h2>Giraffe</h2>,
        <img
          alt="giraffe sticking its tongue out"
          src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
        />,
        <p>
          Giraffes are known for their long, tall appearance. They have a small
          hump on their back like a camel and have a spotted pattern similar to
          that of a leopard. Because of the combination of these features, some
          people called the giraffe a “camel-leopard.” That’s where the
          giraffe’s species name “camelopardalis” comes from.
        </p>,
      ]}
    />
  </IonPage>
);
