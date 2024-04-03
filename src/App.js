import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(''); 
 
  function plus(e) { 
    e.preventDefault(); 
    if(Number(inputRef.current.value)===0){
      setResult(0);
    }
    else{
      
      setResult((result) => result + Number(inputRef.current.value)); 
    }

  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    console.log(result);
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    console.log(result);
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = '';
    console.log(result);
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
    console.log(result);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
