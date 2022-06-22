import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";

const Main = () => {
  return (
    <>
      <Header />
      <HomeGuest />
      <footer className="border-top text-center small text-muted py-3">
        <p>
          <a href="/" className="mx-1">
            Home
          </a>{" "}
          |
          <a className="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |
          <a className="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()}
          <a href="/" className="text-muted">
            &nbsp;ComplexApp
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
