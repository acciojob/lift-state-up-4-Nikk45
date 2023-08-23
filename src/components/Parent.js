import React, { useState } from "react";
import Child from "./Child";

const Parent = ()=>{
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [cartItems, setCartItems] = useState([]);


    const addItem = ()=>{
        setCartItems([...cartItems,{id: crypto.randomUUID(),itemName,itemPrice}])
        setItemName('')
        setItemPrice('')
    }

    const removeItem = (id)=>{
        console.log('item removed');
        return setCartItems(
            cartItems.filter((item)=>item.id !== id)
        )
    }

    console.log(cartItems);

    return(
        <div className="parent">
            <h1>Parent Component</h1>

            <label>Item Name</label>
            <input type="text" placeholder="Item Name" id="itemName" 
            onChange={(e) => {setItemName(e.target.value)}} value={itemName}/>
            <label>Item Price</label>
            <input type="number" placeholder="Item Price" id="itemPrice" 
            onChange={(e) => {setItemPrice(e.target.value)}} value={itemPrice}/>
            <button onClick={addItem}>Add Item</button>

            <Child cartItems={cartItems} removeItem={removeItem}/>
        </div>
    )

}

export default Parent