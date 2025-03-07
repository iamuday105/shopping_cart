import React, { useEffect, useState,Link } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';

const Cart =() => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0); 

  console.log(cart);
  
  useEffect(()=>{
     setTotalAmount(cart.reduce((acc, curr) => acc+ curr.price,0));
  },[cart])

  return (
    <div>
    {
      cart.length > 0 ?
      (<div className=" flex justify-between max-w-6xl mx-auto">
        <div>
          {
            cart.map((item,index) =>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
        </div>
        <div>
        
        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
           <p className="text-green-600">Total Amount: ${totalAmount} </p>
           <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in mt-[20px]">Checkout Now</button>
        </div>

        </div>
      </div>) :
      (<div>
        <h1>Cart Empty</h1>
        <Link to= {"/"}>
          <button>Shop Now</button>
        </Link>
      </div>)
    }
    </div>
  )
}

export default Cart