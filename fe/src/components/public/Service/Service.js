import React, { useState, useContext, useEffect } from 'react'
import './Service.scss'
import { CartDispatchContext, addToCart, removeFromCart, CartStateContext } from '../../../context/cart';
import { dataService } from './data'


const Service = () => {

  const data = dataService

  const dispatch = useContext(CartDispatchContext);
  const { items} = useContext(CartStateContext);


  const [cartItemsCur, setCartItemsCur] = useState(items)
  useEffect(() => {
    setCartItemsCur(items)
  }, [items]);
  


  return (
    <div className='servicePublic'>
      <div className='titleService'>
        <h2>Select the algorithm and your package</h2>
        <p></p>
      </div>
      <div className='selectAlgorithm'>
        <div className='wrapper'>

          {
            data.map((items) => {
              return (
                <div className='algorithmWrapper' key={items.algorithm}>
                  <div className='title'>
                    {items.algorithm}
                  </div>
                  <div className='price'>
                    {
                      items.packageService.map((item, index) => {

                        var cartItems = cartItemsCur

                        const dataSend = { id: item.id, algorithm: items.algorithm, code:items.code, package: item.name, price: item.price, quantity: 1,  timePackage: item.timePackage  }
                        var thisItem = cartItems.find(cartItem => cartItem.id === item.id) || []

                        const handleAddToCart = () => {
                          const product = dataSend;
                          addToCart(dispatch, product);

                          thisItem = cartItems.find(cartItem => cartItem.id === item.id) 
                          if(!thisItem) {thisItem = dataSend}

                          document.getElementsByClassName(`${items.algorithm}-${item.name}`)[0].innerHTML = thisItem.quantity > 0 ? `${thisItem.quantity}` : 'BUY'
                        };

                        const handleDeleteToCart = () => {
                          const product = dataSend;
                          removeFromCart(dispatch, product);

                          thisItem = cartItems.find(cartItem => cartItem.id === item.id)

                          if(!thisItem) {thisItem = dataSend; thisItem.quantity=0}


                          document.getElementsByClassName(`${items.algorithm}-${item.name}`)[0].innerHTML = thisItem.quantity > 0 ? `${thisItem.quantity}` : 'BUY'
                        };

                        return (
                          <div className={item.name} key={index}>
                            {index === 0 ? (<> <span>${item.price}</span>/{item.name}</>) : (<>${item.price}/{item.name} </>)}
                            <button className={`${items.algorithm}-${item.name}`} onClick={handleAddToCart}>{thisItem.quantity > 0 ? `${thisItem.quantity}` : 'BUY'}</button>
                            <button className={`${items.algorithm}-${item.name}-delete`} onClick={handleDeleteToCart}>-</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>


  )
}

export default Service