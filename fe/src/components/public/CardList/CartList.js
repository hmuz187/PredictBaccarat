import React, { useContext } from 'react'
import { CartStateContext, CartDispatchContext, removeFromCart, addToCart, clearCart } from '../../../context/cart';
import './style.scss'
import icons from '../../../utils/icon/reactIcon'


const CartList = () => {

  const { AiOutlineShoppingCart, FaHandPointRight } = icons

  const dispatch = useContext(CartDispatchContext)
  const {items} = useContext(CartStateContext)

  const cartTotal = items
  .map(item => item.price * item.quantity)
  .reduce((prev, current) => prev + current, 0)

  const cartTotalPackage = items.length

  return (
    <div className='cartList'>

      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <div className="shopping-cart-algorithm">
              <AiOutlineShoppingCart className='icon-cart' size={24} />
              <span>Package: {cartTotalPackage} </span>
            </div>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">{cartTotal}$</span>
            </div>
          </div>

          <ul className="shopping-cart-items">

            {items.map((item, index) => {

              const dataSend = { id: item.id, algorithm: item.algorithm, code: item.code, package: item.name, price: item.price, quantity: 1, timePackage: item.timePackage }

              const handleRemove = () => {
                const product = dataSend;
                removeFromCart(dispatch, product);
              };

              const handleAdd = () => {
                const product = dataSend;
                addToCart(dispatch, product);
              };

              const handleClear = () => {
                const product = dataSend;
                clearCart(dispatch, product);
              }

              return (
                <li key={index} className="clearfix">
                  <div>
                    <span><FaHandPointRight size={24} /></span>
                    <span className="item-name">{item.algorithm} - <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.package}</span></span>
                  </div>

                  <span className="item-price">{item.price}$/unit</span>
                  <span className="item-quantity">No: {item.quantity}</span>
                  <span className="item-quantity item-package-total">All: {item.quantity * item.price} $</span>
                  <span> <button onClick={handleRemove}>-</button> </span>
                  <span> <button onClick={handleAdd}>+</button> </span>
                  <span> <button onClick={handleClear}>x</button> </span>

                </li>
              )
            })}

          </ul>


        </div>
      </div>
    </div>
  )
}

export default CartList


/* <a href="/private/login" className="button">Checkout</a> */
