import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { RestaurantsContext, RestaurantsContextProvider } from '../context/RestaurantsContext'
import UpdatePage from './UpdatePage'
import { useNavigate } from 'react-router-dom'


function Restaurant() {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [modalid, setModalid] = useState()
    const navigate = useNavigate();
    const {restaurant} = useContext(RestaurantsContext)
    const fetchData = async () => {
        try {
            const response = await axios({
                url:"http://localhost:4040/api/v1/restaurants",
                method:'GET',
            })
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    const deletData = async (id) => {
        try {
            const response = await axios.delete("http://localhost:4040/api/v1/restaurants/"+id);
            console.log(response.data.msg);
            fetchData()
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchData()
    },[restaurant])

  return (
    <div className='mb-10'>
        <table>
            <thead>
                <tr>
                    <th className='p-2 px-10 text-white bg-blue-600 rounded-tl-md'>Restaurants</th>    
                    <th className='p-2 px-10 text-white bg-blue-600'>Location</th>
                    <th className='p-2 px-10 text-white bg-blue-600'>Price Range</th>
                    <th className='p-2 px-10 text-white bg-blue-600'>Ratings</th>
                    <th className='p-2 px-10 text-white bg-blue-600'>Edit</th>
                    <th className='p-2 px-10 text-white bg-blue-600 rounded-tr-md'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index)=>{
                    return <tr key={index}  className='bg-zinc-600 hover:bg-zinc-500 hover:cursor-pointer'>
                                <td className='text-white text-lg text-center'onClick={()=>navigate(`/restaurants/${data.id}`)}>{data.name}</td>
                                <td className='text-white text-lg text-center'onClick={()=>navigate(`/restaurants/${data.id}`)}>{data.location}</td>
                                <td className='text-white text-lg text-center'onClick={()=>navigate(`/restaurants/${data.id}`)}>{("$").repeat(data.price_range)}</td>
                                <td className='text-white text-lg text-center'onClick={()=>navigate(`/restaurants/${data.id}`)}>***</td>
                                <td className='text-white text-lg text-center'><button onClick={(e)=>{setModal(!modal); setModalid(e.target.value)}} value={data.id} className='bg-green-600 rounded-md px-3 m-3 hover:bg-green-500'>Update</button></td>
                                <td className='text-white text-lg text-center'><button onClick={()=>deletData(data.id)} className='bg-red-600 rounded-md px-3 m-3 hover:bg-red-700'>Delete</button></td>
                                <td>{modal && <UpdatePage id={modalid} onclose={()=>setModal(!modal)}/>}</td>
                            </tr>
                })}                             
                <tr >
                    <td className='text-white text-lg bg-zinc-600 text-center rounded-bl-md'>Bav Vada Pav</td>
                    <td className='text-white text-lg bg-zinc-600 text-center'>Ghatkopar</td>
                    <td className='text-white text-lg bg-zinc-600 text-center'>$</td>
                    <td className='text-white text-lg bg-zinc-600 text-center'>****</td>
                    <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3 hover:bg-green-500'>Update</button></td>
                    <td className='text-white text-lg bg-zinc-600 text-center rounded-br-md'><button className='bg-red-600 rounded-md px-3 m-3 hover:bg-red-700'>Delete</button></td>
                </tr>  
            </tbody>          
        </table>
    </div>
  )
}

export default Restaurant