import React from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
    const wishlist=useSelector(appStore=>appStore?.cart)
    console.log(wishlist)
  return (
    <div></div>
  )
}

export default WishList