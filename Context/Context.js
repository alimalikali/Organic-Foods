import React ,{useReducer ,createContext ,useContext} from "react";
import AllProducts from "../data/AllProducts";
import  {cartReducer}  from "./Reducers";


const Cart = createContext();

const Context = ({ children }) => {
  const products = AllProducts.map((product) => ({
    id : product.id,
    title : product.title,
    img : product.img,
    category : product.category,
    description: product.description,
    price: product.price,

  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products : products,
    cart: []

  });
  

  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

// export const CartState =()=>{
//     return useContext(Cart)
// }


export const CartState = () => {
  const context = useContext(Cart);
  if (!context) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};
