import "./App.css";
import Hero from "./assets/sections/Hero";
import Header from "./components/Header";

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
          <Hero />
        </body>
      </html>
    </>
  );
}

export default App;
