import React, { useRef , useState, useContext, useEffect} from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext'
import axios from 'axios';

function UpdatePage({onclose, id}) {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("Price Range")
  const {restaurant,setRestaurant} = useContext(RestaurantsContext)

  const handleInput=(e,func)=>{
    func(e.target.value);
  }

  const updataData = async (e, id) => {
    e.preventDefault()
    const response = await axios({
      url:"http://localhost:4040/api/v1/restaurants/"+id,
      method:'PUT',
      data:{
        name:name,
        location:location,
        price_range:priceRange
      }
    })
    setRestaurant(Math.random())
    alert(response.data.msg)
    onclose();
  }

  useEffect(()=>{
    const setData = async () => {
      try {
        const response = await axios.get("http://localhost:4040/api/v1/restaurants/"+id)
        setName(response.data.data[0].name);
        setLocation(response.data.data[0].location);
        setPriceRange(response.data.data[0].price_range);
      } catch (error) {
        console.log(error);
      }
    }
    setData()
  },[])

  const mref = useRef();
  const close = (e) => {
    if(mref.current === e.target){
      onclose()
    }}
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center h-screen'  ref={mref} onClick={(e)=>close(e)}>
      <div className="bg-zinc-100 p-10 pt-6 rounded">
      <div className="text-center font-semibold  mb-4 text-lg">Update Restaurant</div>
      <form action="">
        <div className="flex flex-col ">
          <input type="text" value={name} onChange={(e)=>handleInput(e, setName)} placeholder='Name' className='rounded outline-none border pl-2 py-1 px-20 mb-4 '/>
          <input type="text" value={location} onChange={(e)=>handleInput(e, setLocation)} placeholder='Location' className='rounded outline-none border pl-2 py-1 mb-4 '/>
          <select value={priceRange} onChange={(e)=>setPriceRange(Number(e.target.value))} className="rounded outline-none border px-2 py-1 mr-3 w-full ">
            <option disabled>Price Range</option>
            <option value={1}>$</option>
            <option value={2}>$$</option> 
            <option value={3}>$$$</option>
            <option value={4}>$$$$</option>
            <option value={5}>$$$$$</option>
          </select>
          <button onClick={(e)=>updataData(e, id)} className='bg-blue-500 rounded text-white py-1 mt-4'>Update</button>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default UpdatePage