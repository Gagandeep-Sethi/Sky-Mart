import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
const appStore=configureStore({
    reducer:{
        products:productReducer,
        user:userReducer,
        cart:cartReducer,

    }
})
export default appStore