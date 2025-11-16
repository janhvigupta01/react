import React,{useEffect,useState} from 'react'


const App = () => {
  const [count,setCount]=useState(0);
  //first -> side-effect function
  //second -> cleanup function
  //third ->  comma separated dep list
  //variations:1 
  //runs on every render
  // useEffect(() => {
  //  alert("I will run on each render")
  // })


  //variation 2
  //that runs on only first render
  //  useEffect(() => {
  //  alert("I will run on first render only")
  // },[])


  
  function handleClick(){
    setCount(count+1);
  }
  return (
  
    
    <div>
   <button onClick={handleClick}>Click me</button>
   <br/>
   Count:{count}
    </div>
  )
}

export default App
