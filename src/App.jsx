import React, { useState } from 'react'
import Nav from './Componets/Nav'
import Product from './Componets/Product'
import Cart from './Componets/cart'







 const App = () => {

  const [cart , setcart] = useState([]);
  console.log(cart)
  const [warning,setwarning] = useState(false)
  const [show, setshow] = useState(true)
 
  const handleClick = (items)=>{
    
    let ispresent =false;
    cart.forEach((Product)=>{
      if(items.id === Product.id){
        ispresent = true
      }
    })

      if(ispresent){
        setwarning(true);
        setTimeout(()=>{
          setwarning(false)
        },2000);
        return;
      }
  
    setcart([...cart,items])
    
    }

    const handleChange = (item,d) => {
      let ind = -1;
      cart.forEach((data,index) => {
        if(data.id === item.id)
        ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount +=d;
      console.log(tempArr);
  
      if(tempArr[ind].amount === 0){
        tempArr[ind].amount =1;
        
      }
      setcart([...tempArr])
    }
  return (
   
   
    <div >
       {
    warning && <div className='bg-red-500  text-white'>
    Item is All ready exist
  </div>}

     <Nav  cart = {cart.length}  setshow ={setshow} />


     {

      show ?  <Product handleClick={handleClick} /> : <Cart  setCart={setcart} handleChange={handleChange}  cart ={cart}/>
      
     }
    
    
   
    </div>
  )
}

export default App
