import React from "react";
import { Card } from "./components/Card";
import {Header} from "./components/Header";
import  "./index.css";
import {About} from "./components/About";
import {Servis} from "./components/Servis";
import {Rest} from "./components/Rest";
import {Romb} from "./components/Romb"
import {Content} from "./components/Content"
import {Laout} from "./components/Laout"
import {Footer} from "./components/Footer"



function App() {
  return (
    <div className="container">
      <Header/>
    <Card/>
    <About/>
    <Servis/>
    <Rest/>
    <Romb/>
    <Content/>
    <Laout/>
    <Footer/>
    </div>
  );
}

export default App;
