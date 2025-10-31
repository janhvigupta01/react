import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container.jsx";
import FoodInput from "./components/Foodinput.jsx";
import { useState } from "react";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  let [foodItems, setFoodItems] = useState([
    "Salad",
    "Green Vegetables",
    "Roti",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
      <p>above is the list of healthy foods that are good for your health and well being</p>
    </Container> */}
    </>
  );
}

export default App;
