import { useState,useEffect, createContext } from "react"
import { toast } from "react-toastify"


// creating the cart context
export const CartContext=createContext()


const CartProvider = ({children}) => {

  // state to store items added to cart
  const [cartItems,setCartItems]=useState(()=>{
    let storeditems=localStorage.getItem("cartitems")
    return storeditems?JSON.parse(storeditems):[];
  })

  // adding items to the local storage
  useEffect(()=>{
    localStorage.setItem("cartitems",JSON.stringify(cartItems))
  },[cartItems])

  // function to handleaddtocart
  const AddtoCart=(product)=>{
    // console.log(product)
    setCartItems((prevItems)=>{
      let existingItem=prevItems.find((item)=>item.id === product.id)
      if(existingItem){
        existingItem.quantity+=1     // icrement the value by 1
        return[...prevItems]
      }else{
        return[...prevItems, {...product, quantity:1}]
      }
    })
    toast.success('successfully added')
  }

  // function to increement the Quantity
  const increment=(id)=>{
    // console.log(id)
    setCartItems((prevItems)=>             // if {} gives return statement compalsary
      prevItems.map((item)=>{
        return item.id==id?{...item,quantity:item.quantity+1}:item
      })
    )
  }

  // function decrement the Quantity
  const decrement=(id)=>{
    // console.log(id)
    setCartItems((prevItems)=>             // if {} gives return statement compalsary
    prevItems.map((item)=>{
      return item.id==id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item
    })
  )
  }

  // function to remove the Product
  const removeItem=(id)=>{
    // console.log(id)
    setCartItems((prevItems)=>prevItems.filter((item)=>item.id!==id))
    toast.error("Removed the item")
  }

  // function remove all items from the cart
  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  // function to calculate the cart total
  const Total=cartItems.reduce((total,item)=>total+item.price*item.quantity,0)

  // function to calculate the cartIcon total
  const iconTotal=cartItems.reduce((total,item)=>total+item.quantity,0)


  return (
    <CartContext.Provider value={{AddtoCart, cartItems, increment, decrement, removeItem, Total, iconTotal, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
