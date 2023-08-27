import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { CartStateContext, CartDispatchContext, removeFromCart, toggleCartPopup, addToCart } from '../../../context/cart';
import './style.scss'
import icons from '../../../utils/icon/reactIcon'


const CartPreview = () => {

  const { AiOutlineShoppingCart, FaHandPointRight } = icons


  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const navigate = useNavigate();

  const handleRemove = (item) => {
    return removeFromCart(dispatch, item);
  };

  const handleAdd = (item) => {
    return addToCart(dispatch, item);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    navigate("/checkout");
  };

  const cartTotal = items
    .map(item => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)

  const cartTotalAlgorithm = items.length

  const cartTotalPackage = items
    .map(item => item.quantity)
    .reduce((prev, current) => prev + current, 0)

  return (
    <div className='cartPreview'>

      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <div className="shopping-cart-algorithm">
              <AiOutlineShoppingCart className='icon-cart' size={24} />
              <span>Package: {cartTotalAlgorithm} </span>
            </div>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">{cartTotal}$</span>
            </div>
          </div>

          <ul className="shopping-cart-items">

            {items.map((item) => {

              return (
                <li className="clearfix">
                  <div>
                    <span><FaHandPointRight size={24} /></span>
                    <span className="item-name">{item.algorithm} - <span style={{fontWeight:'bold', fontSize:'16px'}}>{item.package}</span></span>
                  </div>

                  <span className="item-price">{item.price}$/unit</span>
                  <span className="item-quantity">No: {item.quantity}</span>
                  <span className="item-quantity item-package-total">All: {item.quantity * item.price} $</span>
                </li>
              )
            })}

          </ul>

          <a href="/private/login" className="button">Checkout</a>

        </div>
      </div>
    </div>
  )
}

export default CartPreview