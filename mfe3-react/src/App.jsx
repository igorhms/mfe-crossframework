import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./index.css";

export const App = () => (
  <div className="container">
    <h1>App React</h1>
    <p>Versão: {React.version}</p>
    <div>Name: mfe3-react</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
  </div>
);

class ReactElement extends HTMLElement {
  connectedCallback() {
    this._root = ReactDOM.createRoot(this);
    this._root.render(<App />);
  }
}

customElements.define("mfe3_react-element", ReactElement);