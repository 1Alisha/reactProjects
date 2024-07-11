
import './App.css';
import {useState} from 'react';

function App() {

  let [state,setState]=useState(0)
  let [message,setMessage]=useState(0)
  let [color,setColor]=useState(0);

  let add=()=>{
      setState(prevState=>prevState+1);
  }
  let sub=()=>{
      setState(prevState=>{
        if(prevState<=0){
          return 0;
        }return prevState-1;
      });
      
  }

  const messages=[
    'React is awesome',
    'Dsa placement s sath bhi placement km baad bhi',
    "Let's build something amazing",
    "Keep coding!",
    'Give ur best'
  ]

  const colors=[
    'hue-rotate(0deg)',
    'hue-rotate(60deg)',
    'hue-rotate(120deg)',
    'hue-rotate(180deg)',
    'hue-rotate(240deg)',
    'hue-rotate(300deg)'
  ]

  let display=()=>{
    setMessage(prevState=>(prevState+1)%messages.length);

  }

  let changeColor=()=>{
    setColor(prevState=>(prevState+1)%colors.length);
  }

  return (
    <div className="App" onClick={changeColor}  style={{filter:colors[color]}} >
      <header className="App-header" >
        <img 
            
            src="https://static.vecteezy.com/system/resources/previews/007/711/257/non_2x/a-doodle-round-icon-of-a-time-counter-vector.jpg" 
            className="App-logo" 
            alt="logo" 
            
        />
        <div className="btn-container">
            <button onClick={add}>
                      +
            </button>
            <button>
                    {state}
            </button>
            <button onClick={sub}>
                      -
            </button>
        </div>
        <div>
          <h1 className='m'>
                    {messages[message]}
          </h1>
          <button 
                    className="cm" 
                    onClick={display}>
                        Change Message
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
