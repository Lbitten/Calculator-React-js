import React, { useState } from 'react'
import './calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
       if(num===0){
        setNum (e.target.value);
       }else ( setNum (num+e.target.value))
        
    }

    function clear() {
        setNum(0);
    }

    function porcentage(){
        setNum(num/100);
    }

    function change(){
        if (num>0){
            setNum(-num)
        }else(setNum(Math.abs(num)))
    }

    function operatorHandler(e){
        var operatorIn= e.target.value;
        setOperator(operatorIn)
        setOldNum(num)
        setNum(0)
    }

    function calculate(){
        const oldNumNumber = parseFloat(oldnum.replace(",", "."));
        const numNumber = parseFloat(num.replace(",", "."));
        if (operator === '/'){
            setNum((oldNumNumber / numNumber).toLocaleString("pt-BR"));
        }else if(operator === 'X'){
            setNum((oldNumNumber * numNumber).toLocaleString("pt-BR"));
        }else if(operator === '-'){
            setNum((oldNumNumber - numNumber).toLocaleString("pt-BR"));
        }else if(operator === '+'){
            setNum((oldNumNumber + numNumber).toLocaleString("pt-BR"));
        }
    }
  return (

    <div>
        <Box m={9} />
    <Container maxWidth='xs'>
    <div className='wrapper'>
        <Box m={12} />
        <h1 className='result'>{num}</h1>
        <button onClick={clear} className="lighter">AC</button>
        <button onClick={change} className="lighter">+/-</button>
        <button onClick={porcentage} className="lighter">%</button>
        <button className='orange' onClick={operatorHandler} value='/'>/</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandler} value='X'>X</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandler} value='-'>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandler} value='+'>+</button>       
        <button className='gray l' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={","}>.</button>
        <button className='orange' onClick={calculate}>=</button>
    </div>
    </Container>
    </div>
  )
}
