import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"products",
    initialState:{
        
        womenWears:null,
        menWears:null,
        shoes:null,
        electronics:null
    },
    reducers:{
        
        addWomenwears:(state,action)=>{
            state.womenWears=action.payload
        },
        addMenWears:(state,action)=>{
            state.menWears=action.payload
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
export const {addMenWears,addWomenwears,addShoes,addElectronics}=productSlice.actions