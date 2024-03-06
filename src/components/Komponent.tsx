import { Panel } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tekst: string;
}

const Komponent = ({ tekst }: Props) => {
  return (
    <div className="komponent">
      <Panel border>
        <p>{tekst} 😊🎉</p>
      </Panel>
    </div>
  );
};

export default Komponent;

//TODO: Legg til en onClick for å logge Amplitude event når en bruker går til appen vår.
