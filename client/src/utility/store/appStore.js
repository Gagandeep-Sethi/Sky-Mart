import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import userSlice from "./userSlice"
const appStore=configureStore({
    reducer:{
        products:productReducer,
        user:userSlice
    }
})
export default appStore