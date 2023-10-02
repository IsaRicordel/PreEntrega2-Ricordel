import React, {useState} from 'react'
import './Item.css'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Item = () => {
  const { itemId } = useParams()

  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    setQuantity(newQuantity)
  }

  const addToCart = (product) => {
    toast.success(`${product.nombre} ha sido agregado al carrito.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  const product = getItemById(itemId)
  return (
    <div className="main-container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div className="eproductos" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p> {product.nombre} </p>
        <p> {product.marca} </p>
        <img src={product.rutaImagen} alt='img-product-card' width={150}/>
        <p> ${product.precio} </p>
        <label>
          Cantidad:
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <button className="btn-carrito" onClick={() => addToCart(product)}> Agregar al carrito</button>

      </div>
    </div>

  )
}

export default Item 