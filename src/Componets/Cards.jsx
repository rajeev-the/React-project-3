import React, { useState } from 'react'

const Cards = ( {list , handleClick }) => {

 

// const {title, price, author, img} = list;
    
 
  return (
    
    <div className='w-[250px] h-[400px] border-solid  hover:bg-gray-100 border-2 rounded-sm p-5 overflow-hidden'>
        <img  className='w-[100px] h-[150px]  ml-8'  src={list.img} alt="" />
        <div className='m-2'>
        <p className='font-bold' > </p> Price: <p> {list.price} </p>
         <h3 className='font-bold'>Title:{list.title}</h3>
         <p>Author : {list.author}</p>

         <button onClick={()=>handleClick(list)} className=' bg-orange-400  m-2 p-1 rounded-sm'>Add to cart</button>
        
        </div>
       
      
    </div>
  )
}

export default Cards
