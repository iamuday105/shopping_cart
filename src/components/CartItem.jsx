import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {add, remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
const removeFromCart = ()=>{
     dispatch(remove(item.id))
     toast.success("Item Removed");
}

  return (
    <div className="flex flex-col  items-center justify-between
    gap-3 p-4 mt-10 ml-5 ">
      <div>
        <div className="h-[180px] w-[180px]">
          <img className="h-full w-full" src={item.image}/>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 ">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600">{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CartItem