import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles.kgItem} list-group-item active ${
        bought && "active"
      }`}
    >
      <span className={styles.kgSpan}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// import styles from "./Item.module.css";

// const Item = ({ foodItems }) => {
//   const handleBuyButtonClicked = (event) => {
//     console.log(event);
//     console.log(`${foodItems} being bought`);
//   }
//   return (
//     <li className={`${styles.kgItem} list-group-item`}>
//       <span className={styles.kgSpan}>{foodItems}</span>
//       <button
//         className={`${styles.button} btn btn-info`}
//         onClick={(event) => handleBuyButtonClicked(event)}
//       >
//         Buy
//       </button>
//     </li>
//   );
// };

// export default Item;

// // import styles from "./Item.module.css";

// // const Item = ({ foodItems }) => {
// //   const handleBuyButtonClicked = () => {
// //     console.log(`${foodItems} being bought`);
// //   }
// //   return (
// //     <li className={`${styles.kgItem} list-group-item`}>
// //       <span className={styles.kgSpan}>{foodItems}</span>
// //       <button
// //         className={`${styles.button} btn btn-info`}
// //         onClick={handleBuyButtonClicked}
// //       >
// //         Buy
// //       </button>
// //     </li>
// //   );
// // };

// // export default Item;
