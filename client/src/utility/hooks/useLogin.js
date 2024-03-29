import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../store/userSlice"
import { Fetch_Uri } from "../constant"

export const useLogin=()=>{
 const [error,setError]=useState(null)
 const [isLoading,setIsLoading]=useState(null)

 const dispatch=useDispatch()
    const login=async(email,password)=>{
        setIsLoading(true)
        setError(null)
      const response=await fetch(`${Fetch_Uri}/api/user/signin`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })
      const json=await response.json()

      if(!response.ok){
        setIsLoading(false)
        setError(json.message)
      }
      if(response.ok){
        
        localStorage.setItem('user',JSON.stringify(json))//to store item in local storage of browser by name user
        dispatch(addUser(json))
        setIsLoading(false)
      }

    }
    return {login,isLoading,error}
}