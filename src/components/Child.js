import React from "react";

const Child = ({cartItems,removeItem})=>{

    return(
        <>
        <h1>Child Component</h1>
        <div className="child">
            {
                // cartItems===[] && <li>hey</li>
                cartItems.map((item)=>{
                        return <li key={item.id}>{item.itemName} - ${item.itemPrice} 
                    <button onClick={()=>{removeItem(item.id)}}>Remove</button></li>
                })
            }
        </div>
        </>
    )
}

export default Child