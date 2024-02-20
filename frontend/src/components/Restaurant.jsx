import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Restaurant() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios({
            url:"http://localhost:4040/api/v1/restaurants",
            method:'GET',
        })
        setData(response.data.data);
    }

    const deletData = async (id) => {
        const response = await axios.delete("http://localhost:4040/api/v1/restaurants/"+id);
        console.log(response.data.msg);
        fetchData()
    } 

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data);

  return (
    <div className=' '>
        <table>
            <tr>
                <th className='p-2 px-10 text-white bg-blue-600 rounded-tl-md'>Restaurants</th>    
                <th className='p-2 px-10 text-white bg-blue-600'>Location</th>
                <th className='p-2 px-10 text-white bg-blue-600'>Price Range</th>
                <th className='p-2 px-10 text-white bg-blue-600'>Ratings</th>
                <th className='p-2 px-10 text-white bg-blue-600'>Edit</th>
                <th className='p-2 px-10 text-white bg-blue-600 rounded-tr-md'>Delete</th>
            </tr>
            {data.map((data)=>{
                return <tr >
                            <td className='text-white text-lg bg-zinc-600 text-center'>{data.name}</td>
                            <td className='text-white text-lg bg-zinc-600 text-center'>{data.location}</td>
                            <td className='text-white text-lg bg-zinc-600 text-center'>{("$").repeat(data.price_range)}</td>
                            <td className='text-white text-lg bg-zinc-600 text-center'>***</td>
                            <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                            <td className='text-white text-lg bg-zinc-600 text-center'><button onClick={()=>deletData(data.id)} className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
                        </tr>
            })}                             
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center rounded-bl-md'>Bav Vada Pav</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Ghatkopar</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center rounded-br-md'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
        </table>
    </div>
  )
}

export default Restaurant