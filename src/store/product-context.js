import React from "react";


const ProductContext=React.createContext({
    electronicProducts:[],
    foodProducts:[],
    skinCareProducts:[],
    addProduct:()=>{},
    deleteProduct:()=>{}

})

export default ProductContext;