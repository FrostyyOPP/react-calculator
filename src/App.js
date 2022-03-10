import { useState } from 'react'

function App() {
const [result, setResult] = useState('')
const onHandle = (e) =>{
  e.preventDefault();
setResult(result.concat(e.target.name))
}

const clearScreen =()=>{
  setResult("");
}

const answer = (e) =>{
 try{ e.preventDefault()
setResult(eval(result).toString());
 }catch(err){
   setResult("Error");
 }
}

const delNum = (e) =>{
  e.preventDefault();
 setResult(result.slice(0, result.length -1))
}
  return (
    <div className="container">
      <form className="form">
     <input className="result-screen" placeholder='0' type='text' value={result}/> 
     <div className="btns">
     <button className="btn" id="clr-btn" onClick={clearScreen}>Clr</button>
     <button className="btn" id="del-btn" onClick={delNum}>Del</button>
     <button name='*' className="btn" onClick={onHandle}>&times;</button>
     <button name='1' className="btn" onClick={onHandle}>1</button>
     <button name='2' className="btn" onClick={onHandle}>2</button>
     <button name='3' className="btn" onClick={onHandle}>3</button>
     <button name='/' className="btn" onClick={onHandle}>&divide;</button>
     <button name='4' className="btn" onClick={onHandle}>4</button>
     <button name='5' className="btn" onClick={onHandle}>5</button>
     <button name='6' className="btn" onClick={onHandle}>6</button>
     <button name='-' className="btn" onClick={onHandle}>-</button>
     <button name='7' className="btn" onClick={onHandle}>7</button>
     <button name='8' className="btn" onClick={onHandle}>8</button>
     <button name='9' className="btn" onClick={onHandle}>9</button>
     <button name='+' className="btn" onClick={onHandle}>+</button>
     <button name='0' className="btn" onClick={onHandle}>0</button>
     <button name='.' className="btn" onClick={onHandle}>.</button>
     <button className="btn" id="equal-btn" onClick={answer}>=</button>
     </div>
     </form>
    </div>
  );
}

export default App;
