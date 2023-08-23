import React from "react";

const Child = ({cartItems,removeItem})=>{

    return(
        <>
        <div className="child">
        <h1>Child Component</h1>
            {
                // cartItems===[] && <li>hey</li>
                cartItems.map((item)=>{
                        return <li key={item.id}>{item.itemName} - ${item.itemPrice} 
                    <button onClick={()=>{removeItem(item.id)}}>remove</button></li>
                })
            }
        </div>
        </>
    )
}

export default Child