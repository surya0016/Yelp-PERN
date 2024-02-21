import React from 'react'

function Star({rating}) {
    const star = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            star.push(<i className="fa-solid fa-star text-yellow-400" key={i}></i>)
        }else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
            star.push(<i className="fa-solid fa-star-half-stroke text-yellow-400" key={i}></i>)
        }else{
            star.push(<i className="fa-regular fa-star text-yellow-400" key={i}></i>)
        }
    }
  return (
    <>
        {star}
    </>
  )
}

export default Star
