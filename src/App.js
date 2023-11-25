import React from "react";
import PortfolioPage from "./components/PortfolioPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <PortfolioPage />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
