import React, { useContext, useState } from 'react'
import axios from 'axios'
import { RestaurantsContext } from '../context/RestaurantsContext'
function AddBar() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("Price Range")
  const {restaurant,setRestaurant} = useContext(RestaurantsContext)

  const handleInput=(e,func)=>{
    func(e.target.value);
  }

  const sendData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios({
        url:"http://localhost:4040/api/v1/restaurants",
        method:'POST',
        data:{
          name:name,
          location:location,
          price_range:priceRange
        }
      })
      setRestaurant(Math.random())
      console.log(restaurant);
      // console.log(response.data);
      alert(response.data.msg)
    } catch (error) {
      console.log(error);
      await error.response.data.msg.map((msg)=>alert(msg))
      
    }
    
  }

  return (
    <div className='mb-8'>
        <form >
            <input type="text" value={name} onChange={(e)=>handleInput(e, setName)} placeholder='Name' className='rounded outline-none border pl-2 py-1 mr-4 ' />
            <input type="text" value={location} onChange={(e)=>handleInput(e, setLocation)} placeholder='Location' className='rounded outline-none border pl-2 py-1 mr-4 ' />
            <select value={priceRange} onChange={(e)=>setPriceRange(Number(e.target.value))}  className="rounded outline-none border pl-2 pr-20 py-1 mr-3 text-zinc-500">
                <option disabled>Price Range</option>
                <option value={1}>$</option>
                <option value={2}>$$</option> 
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
                <option value={5}>$$$$$</option>
            </select>
            <button className='bg-blue-500 px-3 py-1 rounded text-white' onClick={(e)=>{sendData(e)}}>Add</button>
        </form>
    </div>
  )
}

export default AddBar