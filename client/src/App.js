import React, { PureComponent } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar />
          <Landing />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
