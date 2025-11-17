import "./App.css";
import MyComponent from "./components/MyComponent";

import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Gabriel");
  const redtitlle = false;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este é um parágrafo do App.jsx</p>
      {/* CSS Inline */}
      <p style={{ color: "orange", backgroundColor: "lightgray" }}>
        Este é um parágrafo estilizado com CSS inline.
      </p>
      <p style={{ color: "orange", backgroundColor: "lightgray" }}>
        Este é um parágrafo estilizado com CSS inline.
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "red" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "red" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Gabriel"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>

      {/* CSS dinâmico  */}
      <h2 className={redtitlle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
