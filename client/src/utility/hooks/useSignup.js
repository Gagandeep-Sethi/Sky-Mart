import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../store/userSlice"

export const useSignup=()=>{
 const [error,setError]=useState(null)
 const [isLoading,setIsLoading]=useState(null)

 const dispatch=useDispatch()
    const signUp=async(username,email,password)=>{
        setIsLoading(true)
        setError(null)
      const response=await fetch('http://localhost:5000/api/user/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,email,password})
      })
      const json=await response.json()
     console.log(json.message)
      if(!response.ok){
        setIsLoading(false)
        setError(json.message)
      }
      if(response.ok){
        
        localStorage.setItem('user',JSON.stringify(json))
        dispatch(addUser(json))
        setIsLoading(false)
      }

    }
    return {signUp,isLoading,error}
}