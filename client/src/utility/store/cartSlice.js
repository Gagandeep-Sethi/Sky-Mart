import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        wishlist:[]

    },
    reducers:{
        addToCart:(state,action)=>{
            
                const newItem = action.payload;
                const existingItem = state.cart.find(item => item._id === newItem._id);
            
                if (existingItem) {
                    
                    state.cart = state.cart.map(item =>
                        item._id === existingItem._id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                } else {
                    
                    state.cart = [...state.cart, { ...newItem, quantity: 1 }];
                }
            
            
        },
        removeFromCart:(state,action)=>{
            const removeItem=action.payload
            const existingItem=state.cart.find(item=>item._id===removeItem)
            if(existingItem?.quantity===1){
              state.cart=state.cart.filter(item=>item?._id!==removeItem)
            }
            else{
                state.cart = state.cart.map(item =>
                    item._id === removeItem ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            
        },
        addToWishlist:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.wishlist.find(item=>item._id===newItem._id)
            if(existingItem){
                state.wishlist=state.wishlist.map((item)=> item._id===existingItem._id?{...item,quantity:item.quantity+1}:item)
            }
            else{
                state.wishlist=[...state.wishlist ,{...newItem,quantity:1}]
            }
        },
        removeFromWishlist:(state,action)=>{
            const removeItem=action.payload
            const existingItem=state.wishlist.find(item=>item._id===removeItem)
            if(existingItem?.quantity===1){
                state.wishlist=state.wishlist.filter(item=>item._id!==removeItem)
            }
            else{
                state.wishlist=state.wishlist.map(item=>item._id===removeItem?{...item,quantity:item.quantity-1}:item)
            }
        }

    }


})
export default cartSlice.reducer
export const {addToCart,addToWishlist,removeFromCart,removeFromWishlist}=cartSlice.actions