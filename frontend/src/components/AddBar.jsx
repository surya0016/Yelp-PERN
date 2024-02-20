import React from 'react'

function AddBar() {
  return (
    <div className='mb-8'>
        <form action="">
            <input type="text" placeholder='Name' className='rounded outline-none border pl-2 py-1 mr-4 ' />
            <input type="text" placeholder='Location' className='rounded outline-none border pl-2 py-1 mr-4 ' />
            <select className="rounded outline-none border pl-2 pr-20 py-1 mr-3 " id="">
                <option disabled >Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option> 
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
            <button className='bg-blue-500 px-3 py-1 rounded text-white'>Add</button>
        </form>
    </div>
  )
}

export default AddBar