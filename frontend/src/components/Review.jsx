import React from 'react'
import Star from './Star'
import { useNavigate } from 'react-router-dom'

function Review({name, rating, content}) {
    const navigate = useNavigate();
  return (
        <div className=" bg-blue-500 rounded-md">
            <div className='flex justify-between border-b border-blue-600 p-3'>
                <span className='text-white pr-10' onClick={()=>navigate('/')}>{name}</span>
                <span><Star rating={rating}/></span>
            </div>
            <div className='p-3 text-white break-words max-w-80'>
                {content}
            </div>
        </div>
  )
}

export default Review