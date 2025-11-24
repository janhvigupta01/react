import React ,{useEffect,useState} from 'react'

const TimerComponent = () => {
    const [seconds,setSeconds]=useState(0);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            console.log("setinterval executed")
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000);

        return()=>{
            console.log("time to stop")
            clearInterval(intervalId);
        }
    },[])
    //it will run on first render only
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
