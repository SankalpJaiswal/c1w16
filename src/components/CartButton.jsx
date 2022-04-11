import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] = useState(0)

    const handleDec = () =>{
      if(count>=1)
      {
        setCount(count-1)
      }
      
    }
  
    const handleInc = () =>{
      setCount(count+1)
    }
  return <>
  {/* add to cart button */}
  {/* <button>Add To Cart</button> */}
  {/* count with - and  + button */}
  <button onClick={() => handleInc()}>Add To Cart</button>

  

  <div>
      <button onClick={ () => handleDec() }>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleInc()}>+</button>
  </div>
  </>;
};
export default CartButton
