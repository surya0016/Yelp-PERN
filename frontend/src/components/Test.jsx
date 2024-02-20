import React from 'react'

function Test() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <table className='rounded'>
            <tr className=''>
                <th className='p-2 px-20 text-white bg-blue-600 rounded-tl-md'>Restaurants</th>    
                <th className='p-2 px-20 text-white bg-blue-600'>Location</th>
                <th className='p-2 px-20 text-white bg-blue-600'>Price Range</th>
                <th className='p-2 px-20 text-white bg-blue-600'>Ratings</th>
                <th className='p-2 px-20 text-white bg-blue-600'>Edit</th>
                <th className='p-2 px-20 text-white bg-blue-600 rounded-tr-md'>Delete</th>
            </tr>
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>Dominos</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>New York</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>Pizza hut</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Chicago</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>***</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>Wendys</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>LA</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>Taco Bell</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Mumbai</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>KFC</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Ghatkopar</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>Panda Express</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Chennai</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center'>McDonald</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Ohio</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
            <tr >
                <td className='text-white text-lg bg-zinc-600 text-center rounded-bl-md'>Bav Vada Pav</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>Ghatkopar</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>$$$</td>
                <td className='text-white text-lg bg-zinc-600 text-center'>*****</td>
                <td className='text-white text-lg bg-zinc-600 text-center'><button className='bg-green-600 rounded-md px-3 m-3'>Update</button></td>
                <td className='text-white text-lg bg-zinc-600 text-center rounded-br-md'><button className='bg-red-600 rounded-md px-3 m-3'>Delete</button></td>
            </tr>               
        </table>
    </div>
  )
}

export default Test