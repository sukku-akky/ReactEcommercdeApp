import Input from "./components/Input/Input";
import Products from "./components/Products/Products";
import React ,{Fragment}from "react";
import ProductProvider from "./store/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Input/>
      <Products/>
    </ProductProvider>
    
  );
}

export default App;
