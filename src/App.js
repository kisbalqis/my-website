import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portofolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
