import { useState } from "react"
import { db } from "../data/db"
import { getIndexItem } from "../helpers/functions"

function useCart() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])
  
  const addToCart = (item) => {
    const itemExists = getIndexItem(item.id, cart)
    
    if( itemExists >= 0){
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      setCart(prevCart => [...prevCart, {...item, quantity: 1}])
    }

  }
  
  const addOneItem = (id) =>  {
    const indexItem = getIndexItem(id, cart)
    const updatedCart = [...cart]
    updatedCart[indexItem].quantity++
    setCart(updatedCart)
  }

  const removeOneItem = (id) =>  {
    const indexItem = getIndexItem(id, cart)
    const updatedCart = [...cart]
    const updatedQuantity = updatedCart[indexItem].quantity - 1

    if(updatedQuantity > 0) {
      updatedCart[indexItem].quantity--
      setCart(updatedCart)
    } else {
      removeFromCart(id)
    }
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter( (item) => item.id !== id)
    setCart(updatedCart)
  }

  const resetCart = () => setCart([])

  return {
    data,
    cart,
    setCart,
    addToCart,
    addOneItem,
    removeOneItem,
    removeFromCart,
    resetCart
  }
}

export default useCart