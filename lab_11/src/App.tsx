import "./App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SecondaryCard2 from "./components/SecondaryCard2";
import SecondaryCard1 from "./components/SecondaryCard1";

function App() {
  return (
    <>
      <html>
        <body
          className="parent-column"
          style={{
            padding: 60,
            gap: 40,
          }}
        >
          <Header
            título="TechBlog."
            opcionesDeNavegación={["Artículos", "Ser escritor"]}
            menú="Menú"
          />
          <div
            id="hero"
            className="child-row parent-column"
            style={{ gap: 30 }}
          >
            <div
              className="child-row"
              style={{
                fontSize: 60,
                fontStyle: "italic",
              }}
            >
              Mejor de la semana
            </div>
            <div
              className="child-row parent-row"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 25,
              }}
            >
              <MainCard
                fecha="Dic 7, 2023"
                categoría="Automóviles"
                título="Rivian anuncia furgoneta comercial en EE.UU."
              />
              <div className="child-column parent-column" style={{ gap: 25 }}>
                <SecondaryCard1
                  categoría="Publicidad"
                  producto="iPhone 15 es el futuro"
                  callToAction="¡Obtén el tuyo!"
                />
                <SecondaryCard2 buttonText="Ver todo" />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

export default App;
