import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  // const handleOnChange = (event) => {
  //     console.log(event.target.value);
  // }

  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.FoodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;































// import styles from "./FoodInput.module.css";
// const FoodInput = () => {

//   return (
//     <input
//       type="text"
//       placeholder="Enter food item here"
//       className={styles.FoodInput}
//       onChange={(event) => {
//         console.log(event.target.value);
//     }}
//     />
//   );
// };
// export default FoodInput;
