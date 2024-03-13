import { useState } from "react"

export const useNewProduct=()=>{
 const [error,setError]=useState(null)
 const [isLoading,setIsLoading]=useState(null)

    const addProduct=async(title, category, description, image, price)=>{
        setIsLoading(true)
        setError(null)
      const response=await fetch('http://localhost:5000/api/product',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, description, image, price })
    })
      const json=await response.json()

      if(!response.ok){
        setIsLoading(false)
        setError(json.message)
      }
      if(response.ok){

        setIsLoading(false)
      }

    }
    return {addProduct,isLoading,error}
}