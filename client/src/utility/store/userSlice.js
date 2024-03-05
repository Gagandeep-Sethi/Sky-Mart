import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
        },
        deleteUser:(state,action)=>{
            state.user=null
        }
    }
})

export default userSlice.reducers
export const {addUser,deleteUser}=userSlice.actions