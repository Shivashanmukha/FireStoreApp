import {createContext, useState, useEffect} from 'react'
import { productsData } from '../data/ProductData'
// import { useContext } from 'react'
// import axios from 'axios'

// creating the store
export const ProductContext=createContext()

const ProductProvider = ({children}) => {
    // managing the state for fetching products
    const [product,setProduct]=useState()
    const [isloading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{
        let fetchProduct=()=>{      // when we are fetching the data in firebase
            // try {
                
            // } catch (error) {
                
            // }
            setTimeout(()=>{
                // let res=axios.get("../")
                setProduct(productsData)   // replaced by firestore data in future
                setIsLoading(false)
            },500)
        }

        // calling the function
        fetchProduct()

        return ()=>{}  // cleanup function for further user
    },[])

  return (
    <ProductContext.Provider value={{product,isloading,isError}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
