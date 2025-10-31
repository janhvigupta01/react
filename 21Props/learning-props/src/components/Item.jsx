import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  return (
    <li className={`${styles.kgItem} list-group-item`}>
      <span className={styles.kgSpan}>{foodItems}</span>
    </li>
  );
};

export default Item;
