import React from 'react'
import { BsCart } from "react-icons/bs";
import { FaBook } from "react-icons/fa";



const Nav = ({cart , setshow}) => {
  return (
    <div className='flex bg-orange-400 w-full h-10   justify-around  items-center  '>
        <div  className='flex justify-center items-center '> <FaBook/>  <p > Shopping</p></div>
      
 <button onClick={()=>{setshow(true)}}>Product</button>

      <div className='flex w-10'>
      <BsCart  size={25}  onClick={()=>{setshow(false)}}/>    <div className='w-6 h-6 flex items-center justify-center bg-black rounded-full  text-white'> {cart} </div>  </div>
   
    </div>
  )
}

export default Nav
