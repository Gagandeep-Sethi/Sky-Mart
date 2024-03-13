import { useDispatch } from 'react-redux'
import { addElectronics, addMenWears, addShoes, addWomenwears } from '../store/productSlice'
import { useEffect } from 'react'

const useMainContainer = () => {
    const dispatch=useDispatch()
    const getData=async()=>{
        try {
          const data =await fetch('http://localhost:5000/api/product')
        const json= await data.json()

        const menWears=json?.filter(res=>res.category==="men's clothing")
        const womenWears=json?.filter(res=>res.category==="women's clothing")
        const electronics=json?.filter(res=>res.category==="electronics")
        const shoes=json?.filter(res=>res.category==="shoes")
        dispatch(addMenWears(menWears))
        dispatch(addWomenwears(womenWears))
        dispatch(addShoes(shoes))
        dispatch(addElectronics(electronics))
          
        } catch (error) {
          console.log(error)
        }
        
        }
      
        useEffect(()=>{
         getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
}

export default useMainContainer