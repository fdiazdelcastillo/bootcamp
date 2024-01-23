import "./App.css";
import Hero from "./assets/sections/Hero";
import Header from "./assets/sections/Header";

function App() {
  return (
    <>
      <html>
        <div
          id="container"
          className="parent-column"
          style={{
            padding: 60,
            gap: 40,
          }}
        >
          <Header
            brand="TechBlog."
            links={[
              { url: "#", name: "Artículos" },
              { url: "#", name: "Ser escritor" },
            ]}
          />
          <Hero />
        </div>
      </html>
    </>
  );
}

export default App;
