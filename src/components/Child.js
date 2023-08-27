import React from "react";

const Child = ({cartItems,removeItem})=>{

    return(
        <>
        <div className="child-container">
        <h1>Child Component</h1>
            <div className="child">
            {
                cartItems.map((item)=>{
                        return <li key={item.id}>{item.itemName} - ${item.itemPrice} 
                    <button onClick={()=>{removeItem(item.id)}}>remove</button></li>
                })
            }
            </div>
        </div>
        </>
    )
}

export default Child