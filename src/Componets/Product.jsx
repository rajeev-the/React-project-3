import React from 'react'
import Cards from './Cards'
import list from '../list'

const Product = ( {handleClick}) => {
    
  return (
    <div className=' p-10 h-full w-full flex items-center justify-center   flex-wrap'> 

    {
        list.map((list)=>{

         return   <Cards key = {list.id} list ={list} handleClick={handleClick} />
           
        })
    }
      
    
    </div>
     
  )
}

export default Product
