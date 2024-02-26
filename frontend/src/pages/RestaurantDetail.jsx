import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useFetcher, useNavigate, useParams } from 'react-router-dom'
import Star from '../components/Star'
import Review from '../components/Review'

function RestaurantDetail() {  
  const {id} = useParams()
  const navigate = useNavigate();
  const [restaurantName, setRestaurantName] = useState()
  const [reviewData, setReviewData] = useState([])
  const [review, setReview] = useState();
  const [rating, setRating] = useState();
  const [name, setName] = useState();
  const [avg, setAvg] = useState();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4040/api/v1/restaurants/"+id);
    setRestaurantName(response.data.data[0].name)
  }
  
  const fetchReveiw = async () => {
    const response = await axios.get("http://localhost:4040/api/v1/review/"+id);
    setReviewData(response.data.data.map(data=>data))
    setAvg(response.data.avg)
    console.log(avg);
  }

  const postReview = async (e) => {
    const response = await axios({
      url:"http://localhost:4040/api/v1/review/"+id,
      method:'POST',
      data:{
        name,
        rating,
        review
      }
    })
    alert(response.data.msg)
  }
  
  useEffect(()=>{
    fetchData();
    fetchReveiw();
  },[])
  return (
    <div className='flex justify-center items-center flex-col '>
      <div className="font-semibold text-6xl text-center p-4 hover:cursor-pointer" onClick={()=>navigate('/')}>{restaurantName}</div>
      <div><Star rating={avg}/></div>
      
      <div className='flex border p-8 rounded-md bg-zinc-50 mt-2'>
        <form action="">
          <div className='flex mb-3'>
            <div className="">
              <div>Name</div>
              <input onChange={(e)=>{setName(e.target.value)}} type="text" className='border rounded outline-none pl-2 pr-20 py-1 mr-3'/>
            </div>
            <div className="">
            <div>Rating</div>
            <input onChange={(e)=>{setRating(Number(e.target.value))}} type="number" max={5} className='border rounded outline-none pl-2 py-1 ' />
            </div>
          </div>
          <div className="">
            <div>Description</div>
            <input onChange={(e)=>{setReview(e.target.value)}} type="text" className='rounded outline-none border pl-2 py-1 w-full mb-4'/>
          </div>
          <button onClick={()=>postReview()} className='px-2 py-1 bg-blue-500 text-white rounded'>Submit</button>
        </form>
      </div>
      <div className="grid grid-flow-row gap-4 grid-cols-3 m-4">
        {reviewData.map((review,index) => {
          return <Review key={index} rating={review.rating} content={review.review} name={review.name}/>
        })}
      </div>
    </div>
      
  )
}

export default RestaurantDetail