import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"products",
    initialState:{
        allProducts:null,
        bag:null,
        shoes:null,
        electronics:null
    },
    reducers:{
        addProducts:(state,action)=>{
            state.allProducts=action.payload
        },
        addBag:(state,action)=>{
            state.bag=action.payload
        },
        addShoes:(state,action)=>{
            state.shoes=action.payload
        },
        addElectronics:(state,action)=>{
            state.electronics=action.payload
        }
    }
})

export default productSlice.reducer
export const {addProducts,addBag,addShoes,addElectronics}=productSlice.actions