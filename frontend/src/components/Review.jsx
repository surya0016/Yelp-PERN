import React from 'react'
import Star from './Star'

function Review({name, rating, content}) {
  return (
        <div className=" bg-blue-500 rounded-md">
            <div className='flex justify-between border-b border-blue-600 p-3'>
                <span className='text-white pr-10'>{name}</span>
                <span><Star rating={rating}/></span>
            </div>
            <div className='p-3 text-white break-words max-w-80'>
                {content}
            </div>
        </div>
  )
}

export default Review