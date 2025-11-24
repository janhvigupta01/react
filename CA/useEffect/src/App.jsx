import React from 'react'
import LoggerComponent from './components/LoggerComponents'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
const App = () => {
  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      <ResizeComponent/>
    </div>
  )
}

export default App


























// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(1);

//   //first -> side-effect function
//   //second -> cleanup function
//   //third ->  comma separated dep list
//   //variations:1
//   //runs on every render
//   // useEffect(() => {
//   //  alert("I will run on each render")
//   // })

//   //variation 2
//   //that runs on only first render
//   //  useEffect(() => {
//   //  alert("I will run on first render only")
//   // },[])

//   // variation 3
//   // useEffect(() => {
//   //   alert("I will run every time when count is uptd")

//   // }, [count])

//   //variation 4
//   //multiple dependencies
//   // useEffect(() => {
//   //   alert("I will run every time when count/total is updated")
//   // }, [count,total])

//   //variation 5
//   // is baar let's add a cleanup function
//   // useEffect(() => {
//   //   alert("Count is updated")

//   //   return () => {
//   //    alert("count is unmounted from ui")
//   //   }
//   // }, [count])

//   function handleClick() {
//     setCount(count + 1);
//   }
//   function handleClickTotal() {
//     setTotal(total + 1);
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <br />
//       Count:{count}
//       <br />
//       <button onClick={handleClickTotal}>Click me</button>
//       <br />
//       Total:{total}
//     </div>
//   );
// };

// export default App;
