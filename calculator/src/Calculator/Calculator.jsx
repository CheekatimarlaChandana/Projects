import React,{useState} from 'react';
import { Table } from 'react-bootstrap';

import "./Calculator.css"

const Calculator = () => {
    const[currentScreen,setCurrentScreen] = useState("");
    const addToScreen = (value) => {
        setCurrentScreen(currentScreen+value);

    }

    const calculate = () => {
            try {
            setCurrentScreen(eval(currentScreen));
            } catch (error) {
              setCurrentScreen("Error");
             }
           };
        const clear = () => {
          setCurrentScreen("");
        };
        const backSpace = () => {
          setCurrentScreen(currentScreen.slice(0, -1));
        };
        const power = () => {
          setCurrentScreen(`${currentScreen}^`);
        };

        
    

  return (
    <div class="container">
    <h1>Calculator</h1>

    <div class="calculator">
        <input type="text" name="screen" value={currentScreen} id="screen"/>
        <Table>
            <tr>
                <td><button onClick={clear}>C</button></td>
                <td><button onClick={backSpace}>CE</button></td> 
                <td><button onClick={()=>addToScreen('%')}>%</button></td>
                <td><button onClick={power}>^</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>addToScreen("7")}>7</button></td>
              <td><button onClick={()=>addToScreen("8")}>8</button></td>
              <td><button onClick={()=>addToScreen("9")}>9</button></td>
              <td><button onClick={()=>addToScreen('*')}>X</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>addToScreen("4")}>4</button></td>
              <td><button onClick={()=>addToScreen("5")}>5</button></td>
              <td><button onClick={()=>addToScreen("6")}>6</button></td>
              <td><button onClick={()=>addToScreen('-')}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>addToScreen("1")}>1</button></td>
                <td><button onClick={()=>addToScreen("2")}>2</button></td>
                <td><button onClick={()=>addToScreen("3")}>3</button></td>
                <td><button onClick={()=>addToScreen('+')}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>addToScreen("0")}>0</button></td>
              <td><button onClick={()=>addToScreen('.')}>.</button></td>
              <td><button onClick={()=>addToScreen('/')}>/</button></td>
              <td><button onClick={calculate} >=</button></td> 
            </tr>
        </Table>
    </div>
</div> 
  )
}
export default Calculator;

