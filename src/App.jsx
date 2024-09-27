import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"

const getIndexItem = (id, array) => array.findIndex(guitar => guitar.id === id)

function App() {
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
    updatedCart[indexItem].quantity--
    setCart(updatedCart)
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter( (item) => item.id !== id)
    setCart(updatedCart)
  }

  const resetCart = () => setCart([])

  return (
    <>
      <Header cart={cart} addOneItem={addOneItem} removeOneItem={removeOneItem} removeFromCart={removeFromCart} resetCart={resetCart}/>
      
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => ( 
              <Guitar key={guitar.id} addToCart={addToCart} {...guitar}/>
            ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

      
    </>
  )
}

export default App
