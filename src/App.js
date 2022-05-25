// import { data } from "./components/data";
// import ReactDOM from "react-dom";

import './App.scss';
import Start from "./components/Start";
import { Result } from "./components/Result";
import store from "./state/store"
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>

      <div className="App">
        <h1>Тест</h1>
        <Route exact path="/" ><Start /></Route>
       
        <Route exact path="/result">
          {/* <Result getResult={getResult} result={result} /> */}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
