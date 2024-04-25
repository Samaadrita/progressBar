import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

export default function App() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    if(count!==0){
    const timer = setInterval(()=>{
        setCount(prev => prev-1)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }
  },[count])

  return (
    <div>
    {count}
    <ProgressBar completed={count} />
    </div>
  );
}

