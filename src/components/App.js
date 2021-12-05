import Footer from "./Footer";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "../route/home";
import Program from "../route/program";
import Recruit from "../route/recruit";
import Navbar from "./Navbar";
import CommonModal from "./CommonModal";
import ModalImg from "../assets/img/modalImg.jpeg";
import "../css/main.css";

function App() {
  const [modal, setModal] = useState(true);

  return (
    <>
      <Navbar />
      {/* {modal ? (
        <CommonModal setModal={setModal} imgSrc={ModalImg} />
      ) : (
        <Navbar />
      )} */}
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/program">
          <Program />
        </Route>
        <Route exact path="/recruit">
          <Recruit />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
