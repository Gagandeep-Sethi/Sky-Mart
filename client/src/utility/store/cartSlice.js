import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        wishlist:[]

    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart=state.cart.concat(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((res)=>!res._id===action.payload)
        },
        addToWishlist:(state,action)=>{
            state.wishlist=state.wishlist.concat(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter((res)=>!res._id===action.payload)
        }

    }


})
export default cartSlice.reducer
export const {addToCart,addToWishlist,removeFromCart,removeFromWishlist}=cartSlice.actions