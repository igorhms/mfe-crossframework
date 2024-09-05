import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import history from "./history";
import { Provider, useDispatch } from "react-redux";
import "./index.css";
import { setUser, store } from "./store/store";

const NavigationDivs = () => {
  const navigate = useNavigate();

  window.AngularRouter.events.subscribe((event) => {
    if (
      !event?.routerEvent &&
      !event?.snapshot &&
      !event?.state &&
      !event?.navigationTrigger
    ) {
      navigate(event?.urlAfterRedirects);
      console.log("REACT - ", event);
    }
  });

  return (
    <div style={{ display: "flex", padding: 10, gap: "10px" }}>
      <div onClick={() => navigate("/mfe3-react/nav1")} className="nav-card">
        Navegação 1
      </div>
      <div onClick={() => navigate("/mfe3-react/nav2")} className="nav-card">
        Navegação 2
      </div>
    </div>
  );
};

export const App = () => {
  const [state, setState] = useState(store.getState());
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setUser(event.target.value));
    setState(store.getState());
  };

  return (
    <div className="container">
      <p style={{ fontWeight: "bold" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          height="50"
        />
        React App - {state.user}
      </p>
      <p>Versão: {React.version}</p>
      {/* <Button /> */}
      <NavigationDivs />

      <Routes>
        <Route path="/mfe3-react" element={<Home />} />
        <Route path="/mfe3-react/nav1" element={<Page1 />} />
        <Route path="/mfe3-react/nav2" element={<Page2 />} />
      </Routes>

      <label htmlFor="nome">
        <input
          id="nome"
          type="text"
          placeholder="Nome do usuário"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const RootComponent = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Suspense fallback={<div>Loading</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

class ReactElement extends HTMLElement {
  connectedCallback() {
    this._root = ReactDOM.createRoot(this);
    this._root.render(<RootComponent />);
  }
}

customElements.define("mfe3_react-element", ReactElement);
