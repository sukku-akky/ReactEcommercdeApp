

import React,{useContext} from "react";
import ProductContext from "../../store/product-context";

const SkinCareItems=()=>{
    const proCtx=useContext(ProductContext);

    const skincareItems=<ul>{proCtx.skinCareProducts.map((item)=>(
        <li key={item.id}>{item.price}-{item.category}-{item.name}  <button onClick={()=>{proCtx.deleteProduct(item.category,item.id)}}>delete product</button></li>
    ))}

    </ul>
    return (
        <>
        <h1>SkinCare Items</h1>
        {skincareItems}
        </>
    )

}

export default SkinCareItems;