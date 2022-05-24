import Questions from "./components/Questions"
import { data } from "./components/data";
import ReactDOM from "react-dom";

import './App.css';
import Start from "./components/Start";
import { Result } from "./components/Result";
import store from "./state/store"
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [answer, setAnswer] = useState(0);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  const getAnswer = (event) => {
    if (event.target.value === 'yes') {
      if (count === 0) {
        setAnswer(answer + 1)
        setCount(count + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (count !== 0) {
        setAnswer(answer - 1)
        setCount(count - 1)
      }else{
        setAnswer(answer)
      }
    }

  }

  const getReset = () => {
    setAnswer(0)
    setCount(0)
    setResult(result + answer)

  }

  const getResult = () => {
    setAnswer(0)
    setCount(0)
    setResult(0)

  }


  const questionsArr = store.questions.map((elem) =>
    <Questions
      key={elem.id}
      id={elem.id}
      question={elem.question}
      answ1={elem.answ1}
      answ2={elem.answ2}
      answ3={elem.answ3}
      answ4={elem.answ4}
    
      path={elem.path}
      link={elem.link}
      next={elem.next}
      getReset={getReset}
      getAnswer={getAnswer}
    />
  )

  return (
    <BrowserRouter>
      
        <div className="App">
          <h1>Тест</h1>
          <Route exact path="/" ><Start /></Route>
          {questionsArr}
          <Route exact path="/result">
            <Result getResult={getResult} result={result} />
          </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
