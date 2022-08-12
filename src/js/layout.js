import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import CharacterDetail from './views/CharacterDetail.jsx'
import Planets from "./views/Planets.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/character/:index" element={<CharacterDetail/>} />
            <Route path="/planets/:index" element={<Planets/>} />
            <Route path="*" element={<h1>Not found 404</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>  
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
