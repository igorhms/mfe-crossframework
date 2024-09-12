import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { filter } from "rxjs";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { useUsername } from "./hooks/useState.ts";
import { setUsername } from "shared-state-lib";
import "./index.css";

const NavigationDivs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = window.AngularRouter.events
      .pipe(filter((e) => e instanceof window.NavigationEnd))
      .subscribe((event) => {
        navigate(event?.urlAfterRedirects);
        console.log("REACT - ", event);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div style={{ display: "flex", padding: 10, gap: "10px" }}>
      <div onClick={() => navigate("/mfe3-react/nav1")} className="nav-card">
        Página 1
      </div>
      <div onClick={() => navigate("/mfe3-react/nav2")} className="nav-card">
        Página 2
      </div>
    </div>
  );
};

export const App = () => {
  const username = useUsername();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <div className="title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          height="50"
        />
        <span style={{ fontWeight: "bold" }}>Aplicação React</span>
      </div>
      <p>Username: {username}</p>
      {/* <p>Versão: {React.version}</p> */}
      {/* <Button /> */}
      <NavigationDivs />

      <Routes>
        <Route path="/mfe3-react" element={<Home />} />
        <Route path="/mfe3-react/nav1" element={<Page1 />} />
        <Route path="/mfe3-react/nav2" element={<Page2 />} />
      </Routes>

      {/* <label htmlFor="nome">
        <input
          id="nome"
          type="text"
          placeholder="Nome do usuário"
          onChange={handleChange}
        />
      </label> */}
    </div>
  );
};

const RootComponent = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);

class ReactElement extends HTMLElement {
  connectedCallback() {
    this._root = ReactDOM.createRoot(this);
    this._root.render(<RootComponent />);
  }
}

customElements.define("mfe3_react-element", ReactElement);
