import ProductContext from "./product-context";
import React,{useState} from "react";

const ProductProvider=(props)=>{
    const [electronicItems,setElectronicItems]=useState([]);
    const [foodItems,setFoodItems]=useState([]);
    const [skinCareItems,setSkinCareItems]=useState([]);

    const addProductHandler=(category,product)=>{
        
        if(category==="electronics"){
            setElectronicItems([...electronicItems,product])
        } else if(category==="food"){
            setFoodItems([...foodItems,product])
        } else{
            setSkinCareItems([...skinCareItems,product])
        }
        localStorage.setItem(product.id,JSON.stringify(product));
        
    }

    const deleteProductHandler=(category,id)=>{
        if(category==="electronics"){
            setElectronicItems((prevItems)=>prevItems.filter((item)=>item.id!==String(id)));
        } else if(category==="food"){
            setFoodItems((prevItems)=>prevItems.filter((item)=>item.id!==String(id)));
        } else{
            setSkinCareItems((prevItems)=>prevItems.filter((item)=>item.id!==String(id)));
        }
        localStorage.removeItem(id);

    }


    const productCtx={
        electronicProducts:electronicItems,
        foodProducts:foodItems,
        skinCareProducts:skinCareItems,
        addProduct:addProductHandler,
        deleteProduct:deleteProductHandler
    }

    return (
        <ProductContext.Provider value={productCtx}>{props.children}</ProductContext.Provider>
    )

}

export default ProductProvider;