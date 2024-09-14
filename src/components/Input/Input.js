import React,{useContext} from "react";
import classes from "./Input.module.css";
import ProductContext from "../../store/product-context";

const Input=()=>{
    const proCtx=useContext(ProductContext);

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const product={
            id:event.target.id.value,
            price:event.target.price.value,
            name:event.target.name.value,
            category:event.target.category.value
        };
        proCtx.addProduct(product.category,product);
       
        
      
        

    }

    return <>
    <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
            <label htmlFor="id">Product Id:</label>
            <input id="id" name="id" type="number"/>
        </div>
        <div>
            <label htmlFor="price">Selling Price:</label>
            <input id="price" name="price" type="number"/>
        </div>
        <div>
            <label htmlFor="name">Product Name:</label>
            <input id="name" name="name" type="text"/>
        </div>
        <div>
            <label htmlFor="category">Choose a Category:</label>
            <select id="category">
                <option value="electronics">Electronics</option>
                <option value="food">Fooditems</option>
                <option value="skincare">Skincare</option>
            </select>
            
        </div>
        <button className={classes.button} type="submit">Add Product</button>
    </form>
    </>

}

export default Input;