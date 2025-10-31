import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [calVal, setCalVal] = useState("48");
  const onButtonClick = (event) => console.log(event);
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
