import logo from "./logo.svg";
import  {NavBar}  from "./components/NavBar";
import  {Banner}  from "./components/Banner";
import  {Projects}  from "./components/Projects";
import  {Skills}  from "./components/Skills";
import  {Connect}  from "./pages/Connect";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/'
          element={
            <Fragment>
                <Banner />
                <Skills />
                <Projects />
            </Fragment>
          }
          />
          <Route path="/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}

export default App;
