import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useFetcher, useParams } from 'react-router-dom'
import Star from '../components/Star'
import Review from '../components/Review'

function RestaurantDetail() {
  const {id} = useParams()
  const [name, setName] = useState()
  const fetchData = async () => {
    const response = await axios.get("http://localhost:4040/api/v1/restaurants/"+id);
    setName(response.data.data[0].name)
  }
  const fetchReview = async () => {
    const response = await axios({
      url:"http://localhost:4040/api/v1/restaurants/"+id,
      
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className="font-semibold text-6xl text-center p-4">{name}</div>
      <div><Star rating={1.2}/></div>
      <div className="grid grid-flow-row gap-4 grid-cols-3 m-10">
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
        <Review rating={3} name={'Name'} content={'fjkadshjkfhjkashdkjlhfasdkjhfjkhaslkfhlkdsfkjhkajsdhfjkhdskajhfkljdhaslkjfhsdkajhfklhsdakjfhkajsh'}/>
      </div>
      <form action="">
        <input type="text" className='border'/>
        <input type="text" className='border'/>
        <input type="text" className='border'/>
      </form>
    </div>
      
  )
}

export default RestaurantDetail