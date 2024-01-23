import "./App.css";
import Hero from "./assets/sections/Hero";
import Header from "./assets/sections/Header";

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
            brand="TechBlog."
            links={[
              {
                url: "#",
                name: "Artículos",
              },
              { url: "#", name: "Ser escritor" },
              { url: "#", name: "Blog" },
              { url: "#", name: "Contacto" },
            ]}
          />
          <Hero />
        </body>
      </html>
    </>
  );
}

export default App;
