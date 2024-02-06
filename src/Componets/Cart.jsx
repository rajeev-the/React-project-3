import React , {useState ,useEffect} from 'react'

const cart = ({cart , setCart , handleChange}) => {

  const [price,setPrice] = useState(0);

  const handleRemove = (id) =>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans+= item.amount * item.price;
    })
    setPrice(ans)
  }
  

  useEffect(() => {
    handlePrice();
  })

  
    
  return (
    <>
    <div  className='w-full   p-3 flex-wrap flex '>

{

    cart.map((items)=>{

      return  <div key={items.id} className=' flex-wrap w-[200px] m-2 p-3 h-[440px]  border-solid  border-2 border-black rounded-lg'>
            
            <div className='w-full h-[70%] flex flex-col  justify-center items-center'>  
            <img className='w-[100%] h-[100%] ' src={items.img} alt="" />
             </div>
             <div className='flex gap-1'>   <p className='font-bold'>Price: </p> {items.price} </div>
        
             <div className='flex gap-1'>   <p className='font-bold'>Title:  </p> {items.title}</div>

             <div className=' h-[10%] w-full gap-2  flex justify-center items-center'>

                <button  className='bg-green-500 px-2 flex justify-center items-center  py-1 rounded-lg'   onClick={() => {
                      handleChange(items ,+1)
                    }}>+</button>
                {items.amount}
                <button onClick={() => {
                      handleChange(items ,-1)
                    }} className='bg-red-500 px-2  py-1 rounded-lg'>-</button>

                <button   onClick={() => handleRemove(items.id)} className=' bg-blue-400 px-3 py-1 rounded-lg' > Remove</button>
             </div>
       
             
        

      

        
        
        
          </div>



    })
}

       

        
      
    </div>

    <div className=' absolute left-[1159px]   bottom-3 w-[20%]   gap-2 flex items-center bg-slate-400 justify-center rounded-lg'> 

   <h3>Total price :  </h3><span>{price}RS</span>

    </div>

    </>
  )
}

export default cart
