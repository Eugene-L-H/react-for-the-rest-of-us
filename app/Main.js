import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8080";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import About from "./components/About";
import Terms from "./components/Terms";
import CreatePost from "./components/CreatePost";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";

const Main = function () {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexAppToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(message) {
    setFlashMessages(prev => prev.concat(message));
  }

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            ) : (
              <HomeGuest loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )
          }
        />
        <Route path="/post/:id" element={<ViewSinglePost />} />
        <Route
          path="/create-post"
          element={<CreatePost addFlashMessage={addFlashMessage} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
