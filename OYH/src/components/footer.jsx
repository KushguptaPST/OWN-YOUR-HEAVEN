import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <div className='bg-gray-400'>
        <div className=' h-20 w-full flex justify-center items-center font-serif border-b border-gray-200'>
            <h1 className='text-7xl mr-10'>OYH</h1>
            <h3 className='text-4xl'>Find Your Stays...</h3>
        </div>
        <div className='flex flex-wrap justify-evenly ' >
            <div className='ml-5 h-80 flex flex-col '>
                <p className='mt-5'>Download OYH app for exciting offers.</p>
                <button><a href="#">
                <div className='h-18 w-70 mt-10 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Download_on_the_Mac_App_Store_Badge_NL_RGB_blk.svg/2560px-Download_on_the_Mac_App_Store_Badge_NL_RGB_blk.svg.png)] bg-cover'></div>
                </a></button>
                <button><a href="#">
                <div className='h-20 w-70 mt-10 bg-[url(https://static.vecteezy.com/system/resources/previews/012/871/365/non_2x/google-play-store-download-button-in-black-colors-download-on-the-google-play-store-free-png.png)] bg-cover'></div>
                </a></button>
            </div>
            <div className='ml-5 flex flex-col justify-evenly border-l border-gray-200'>
                <Link to="/about" >About Us</Link>

                

                <Link to="/terms">Terms and Conditions</Link>


                <Link to="/query">Query?</Link>


            </div>
            <div className='ml-5 flex flex-col justify-evenly border-l border-gray-200 '>
                
                <a href='#' className='ml-5'>Guest Policies</a>
                <a href='#' className='ml-5'>Privacy Policy</a>
                <a href='#' className='ml-5'>Trust And Safety</a>
            </div>
        </div>
      </div>
      <div className='h-20 w-full flex justify-evenly items-center font-serif border-b border-gray-200 bg-gray-400 border-t border-gray-200'>
        <button><a href='#'>
        <div className='h-10 w-10 rounded bg-[url(https://wallpapers.com/images/featured/instagram-logo-vector-png-ir8f58dvmxlfkgac.jpg)] bg-cover'></div>
        </a></button>
        <button><a href='#'>
        <div className='h-10 w-10 rounded bg-[url(https://cdn-icons-png.flaticon.com/512/20/20673.png)] bg-cover'></div>
        </a></button>
        <button><a href='#'>
        <div className='h-10 w-10 rounded bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XFYs3dYX3JJDAFfABdu76w5q-yvjc3zA_-m0X-kyUYLJQ2CCGbVdBqjxvp7uQTfka7Y&usqp=CAU)] bg-cover'></div>
        </a></button>
        <button><a href='#'>
        <div className='h-10 w-10 rounded bg-[url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Whatsapp_logo_1.png)] bg-cover'></div>
        </a></button>
      </div>
    </div>
  )
}

export default Footer
