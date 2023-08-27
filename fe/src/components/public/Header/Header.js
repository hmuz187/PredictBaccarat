import React, { useContext, useState, useEffect } from 'react'
import './Header.scss'

import { CartStateContext, CartDispatchContext, toggleCartPopup } from '../../../context/cart'

import logo from '../../../public/img/logoMain.png'
import { iconEarth } from '../../../utils/icon/index'
import icons from '../../../utils/icon/reactIcon'

import CartPreview from '../CartPreview/CartPreview'

const Header = () => {

  const { AiOutlineShoppingCart } = icons

  const { items: cartItems, isCartOpen } = useContext(CartStateContext)

  const [cardPreview, setCartPreview] = useState(isCartOpen)

  const cartQuantity = cartItems.length || 0
  useEffect(() => {
  }, [cartItems]);



  const dispatch = useContext(CartDispatchContext)


  const handleCartButton = () => {
    toggleCartPopup(dispatch)
    setCartPreview(isCartOpen)
  }




  return (
    <div>
      <div className='headerPublic'>
        <div className='container'>
          <div className='container-logo'>
            <img src={logo} alt="" />
          </div>
          <div className='container-link'>
            <div className='language'>
              <div className='icon-earth'><img src={iconEarth} alt="" /></div>
              <select className="languageAll">
                <option lang='en' label='English' value="en-EN"></option>
                <option lang='vi' label='Tiếng Việt' value="cn-CN"></option>
                <option lang='cn' label='China' value="vi-VN"></option>
              </select>
            </div>
            <div className='login'>
              <a role='button' href='/private/login'>Log in</a>
            </div>

            <div className='login'>
              <a role='button' href='/private/signup'>Sign up</a>
            </div>

            <div className='cart'>
              <AiOutlineShoppingCart className='icon-cart' size={30} onClick={handleCartButton} />
              {cartQuantity ? (
                <span className="cart-count">{cartQuantity}</span>
              ) : (
                ""
              )}

            </div>
          </div>
        </div>
      </div>

      <div className='cardPreviewHeader'>
        {cardPreview ? (
          <CartPreview className='container' />
        ) : (
          <></>
        )}

      </div>

    </div>
  )
}

export default Header



// import React, { useState } from 'react'
// import './Header.scss'

// import logo from '../../../public/img/logo01.png'
// import { iconEarth, iconArrow } from '../../../utils/icon/index'

// const Header = () => {

//   const [isDisplaySelectLanguage, setIsDisplaySelectLanguage] = useState(false)
//   const handleClickLanguage = () => {
//     setIsDisplaySelectLanguage(isDisplaySelectLanguage === false ? true : false)
//   }

//   return (
//     <div>
//       <div className='headerPublic'>
//         <div className='container'>
//           <div className='left'>
//             <span className='logo'><img src={logo} alt="" /></span>

//           </div>
//           <div className='right'>
//             <span className='language'>
//               <div>
//                 <div className='icon-earth'><img src={iconEarth} alt="" /></div>
//                 {/* <select name="" style={{display: isDisplaySelectLanguage===false? 'none' : 'inline-flex'}}> */}
//                 <select name="" hidden='hidden'>
//                   <option selected lang='en' label='English' value="en-EN"></option>
//                   <option lang='vi' label='Tiếng Việt' value="cn-CN"></option>
//                   <option lang='cn' label='China' value="vi-VN"></option>
//                 </select>
//                 <div className='icon-arrow' onClick={handleClickLanguage}><img src={iconArrow} alt="" /></div>
//               </div>
//             </span>
//             <span className='signin'><a role='button' href='/private/login'>Sign in</a></span>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Header