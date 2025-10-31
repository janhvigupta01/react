import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];
  // if(foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  // let emptymessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am still hungry</h3>}
      {/* {emptymessage} */}
      {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}  
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
