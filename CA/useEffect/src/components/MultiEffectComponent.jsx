import React,{useState,useEffect} from 'react'

const MultiEffectComponent = () => {
    const [count,setCount]=useState(0);
    const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
        console.log("Count updated:",count);
    },[count]);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setSeconds(preSeconds=>preSeconds+1);
        },1000)
        return ()=>clearInterval(intervalId);
    },[seconds]);
    
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
