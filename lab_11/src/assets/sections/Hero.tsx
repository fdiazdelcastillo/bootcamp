import { CSSProperties } from "react";
import MainCard from "../../components/MainCard";
import SecondaryCard1 from "../../components/SecondaryCard1";
import SecondaryCard2 from "../../components/SecondaryCard2";

function Hero(): React.ReactNode {
  const gap25Style: CSSProperties = {
    gap: 25,
  };

  return (
    <>
      <div id="hero" className="child-row parent-column" style={{ gap: 30 }}>
        <div
          className="child-row"
          style={{
            fontSize: 60,
            fontStyle: "italic",
          }}
        >
          Mejor de la semana
        </div>
        <div className="child-row parent-row" style={gap25Style}>
          <MainCard
            date="Dic 7, 2023"
            category="Automóviles"
            title="Rivian anuncia furgoneta comercial en EE.UU."
          />
          <div className="child-column parent-column" style={gap25Style}>
            <SecondaryCard1
              category="Publicidad"
              title="iPhone 15 es el futuro"
              callToAction="¡Obtén el tuyo!"
            />
            <SecondaryCard2 buttonText="Ver todo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
