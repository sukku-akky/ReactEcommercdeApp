import React,{useContext} from "react";
import ProductContext from "../../store/product-context";

const FoodItems=()=>{
    const proCtx=useContext(ProductContext);

    const foodItems=<ul>{proCtx.foodProducts.map((item)=>(
            <li key={item.id}>{item.price}-{item.category}-{item.name} <button onClick={()=>{proCtx.deleteProduct(item.category,item.id)}}>delete product</button></li>
        ))
        }</ul>
    return (
        <>
        <h1>Food Items</h1>
        {foodItems}
        </>
    )
}

export default FoodItems;