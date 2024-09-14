import React,{useContext} from "react";
import ProductContext from "../../store/product-context";

const ElectronicItems=()=>{
    const proCtx=useContext(ProductContext);

    const electronicItems=<ul>{
        proCtx.electronicProducts.map((item)=>(
            <li key={item.id}>{item.price}-{item.category}-{item.name} <button type="button" onClick={()=>{proCtx.deleteProduct(item.category,item.id)}}>delete product</button></li>
        ))
        }</ul>
    return (
        <>
        <h1>Electronic Items</h1>
        {electronicItems}
        </>
    )

}

export default ElectronicItems;