import React from 'react'

const App = () => {
  // function handleEvent(){
  //   alert("i am clicked")
  // }
  // function handleMouseOver(){
  //   alert("para ke upar mouse lekr aaye ho")
  // }
  function handleInputChange(e){
    // console.log("input me value change hui h")
    console.log("value till now: ",e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("form submit krdu kya");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>i am a para</p>
      <button onClick={handleEvent}>click me</button> */}
    </div>
  )
}

export default App
