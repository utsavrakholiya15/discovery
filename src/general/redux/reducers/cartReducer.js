import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount:JSON.parse(localStorage.getItem("cartCount"))|| 0,
    cartItems: JSON.parse(localStorage.getItem("cart"))||[] 
  },
  reducers: {
    increment: (state, action) => {
      state.cartCount += 1;
    },
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartCount += Number(action.payload.quantity);
      localStorage.setItem("cartCount",JSON.stringify(state.cartCount))
      localStorage.setItem("cart",JSON.stringify(state.cartItems));
    },
    replaceCart:(state,action)=>{
      console.log("action payload****",action.payload);
      state.cartItems=action.payload.arr;
      state.cartCount-=Number(action.payload.q);
      localStorage.setItem("cart",JSON.stringify(action.payload.arr));
      localStorage.setItem("cartCount",JSON.stringify(state.cartCountapp));
    }
  },
  extraReducers: () => {},
});
export const { increment, setCartItems,replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
