import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
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
    </div>
  );
}

export default App;
