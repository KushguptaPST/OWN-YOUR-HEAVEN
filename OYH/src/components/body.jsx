import React from 'react'

const Body = () => {
  return (
    <div>
        <div className=' flex justify-center items-center h-70 bg-[url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?semt=ais_hybrid&w=740&q=80)]'>
        
        <div className='flex'>
            <input  className='bg-white p-4 w-90 border-r' type="text "  placeholder='Search by city,PGs,or Neighborhood'  />
            <p className='bg-white  flex justify-center items-center w-60  border-r cursor-pointer  '> Tue,18 Nov - Wed,19 Nov </p>
            <p className='bg-white  flex justify-center items-center w-60   cursor-pointer  '> 1 Guest , 1 Room</p>
            <button className='bg-green-400 w-30 text-white text-xl cursor-pointer hover:bg-green-500'>Search</button>
        </div>
        </div>
        <div className='bg-white h-120 flex items-center justify-center'>
            <img className='h-70 w-310  ' src="https://assets.oyoroomscdn.com/cmsMedia/1606e8a0-685f-4c31-8319-4b592f1ca086.jpg" alt="" />
        </div>
    </div>
  )
}

export default Body