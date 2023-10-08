import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import TypoGraphy from "./TypoGraphy";

interface HeaderProps {
  content: React.ReactNode[];
}

const ContentBody: React.FC<HeaderProps> = ({ content }) => (
  <>
    <IonContent fullscreen={true} className="container ion-padding">
      <TypoGraphy>Animal Facts</TypoGraphy>

      {content}

      <h2>Elephant</h2>
      <img
        alt="two grey elephants on grass plains during sunset"
        src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
      />
      <p>
        Elephants are the largest existing land animal, with massive bodies,
        large ears, and long trunks. Elephants’ long trunks are multifunctional.
        They are used to pick up objects, trumpet warnings, greet other
        elephants, or suck up water for drinking or bathing.
      </p>

      <h2>Dolphin</h2>
      <img
        alt="black and white dolphin in water"
        src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
      />
      <p>
        Dolphins range in color depending on the species, from white, pearl, and
        pink to darker shades of brown, gray, blue, and black. They have smooth
        skin, flippers, and a dorsal fin. They have a long, slender snout with
        about 100 teeth and a streamlined body. They have a single blowhole on
        top of their head, which has a flap that opens to reveal a pair of
        nostrils. The dolphin uses these nostrils for breathing when it
        surfaces.
      </p>
    </IonContent>
  </>
);

export default ContentBody;
