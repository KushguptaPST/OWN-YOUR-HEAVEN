import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between border-b'>
      <div className='h-20 w-65 ml-10 flex justify-center items-center text-5xl font-serif font-bold'>
        OYH
      </div>
      <Link to="/list-property">
      <button>
      <div className='text-xl h-20 w-65 flex justify-center items-center flex-col border-gray-50 border-2'>
        List Your Property
        <p className='text-xs'>Start earning in 30 min</p>
      </div>
      </button></Link>
      <button><a href='tel:6204646300'>
      <div className='h-20 w-65 text-xl flex justify-center items-center border-gray-100 border-2'>
        <div className='h-8 w-8 rounded-4xl mr-5 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0GZ2dKfnpLXotVEV8UvNGKTxfFSfcb280A&s)] bg-cover '></div>
       Call us to Book now
      </div>
      </a></button>
      <div className='text-xl h-20 w-65 flex justify-center items-center border-gray-100 border-2'>
        <div className='h-8 w-8 rounded-4xl mr-5 bg-[url(https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg)] bg-cover '></div>
        <Link to="/login"><button><a href='#'>Login</a></button>/</Link>
        <Link to="/signup"><button><a href='#'>Signup</a></button></Link>
      </div>
    </div>
  )
}

export default Navbar