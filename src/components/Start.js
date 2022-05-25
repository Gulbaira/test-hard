import React, {useState} from 'react'
// import { NavLink } from 'react-router-dom'
import store from '../state/store'
import Questions from "./Questions"


export const Start = () => {

    const [answer, setAnswer] = useState(0);
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
    const [qindex, setQindex] = useState(0)
  

    const handleNext = () => {

        if (qindex >= store.questions.length) { 
            getReset()
        } else {
          setQindex(qindex + 1)
        }
        
    }

    console.log("result", result);
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
        } else {
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
  

    const [started, setStarted] = useState(false);

//     const questionsArr = store.questions.map((elem) => (
//     <Questions
//       key={elem.id}
//       id={elem.id}
//       question={elem.question}
//       answ1={elem.answ1}
//       answ2={elem.answ2}
//       answ3={elem.answ3}
//       answ4={elem.answ4}
//       handleNext={handleNext}
//       path={elem.path}
//       link={elem.link}
//       next={elem.next}
//       getReset={getReset}
//       getAnswer={getAnswer}
//     />
    
//     )
//   )
  
  const elem = store.questions[qindex]
  console.log('elem', qindex)
    return (
        <div>
            {!started && <input className='button-main' type="button" value="START" onClick={() => setStarted(true)} />}
            {started &&
                <Questions
                key={elem.id}
                id={elem.id}
                handleNext={handleNext}
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
            }
        </div>
    )
}

export default Start