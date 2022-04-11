import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"



const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}



            {/* {GroceryItem.map((data,index) =>{
                return <GroceryItem{...data[index]} />
            })} */}

            

            <GroceryItem {...data[0]} />
            <GroceryItem {...data[1]} />
            <GroceryItem {...data[2]} />
            <GroceryItem {...data[3]} />
            <GroceryItem {...data[4]} />
            <GroceryItem {...data[5]} />
            <GroceryItem {...data[6]} />
            <GroceryItem {...data[7]} />
            <GroceryItem {...data[8]} />
            <GroceryItem {...data[9]} />
        </div>
        </>
    )
}
export default GroceryDetails