import styles from './grocery.module.css'
import CartButton from './CartButton';

// reusable card component
const GroceryItem = (props) => {
  const {imgURL,title,mrp} = props;

  return <div className={styles.div}>
  <img src={imgURL}/>
  <h2>{title}</h2>
  <p>{mrp}</p>
  <button><CartButton /></button>
  
  </div>;
};
export default GroceryItem;
