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
        <div className='bg-white h-250 flex items-center justify-evenly flex-col'>
            <img className='h-70 w-310  ' src="https://assets.oyoroomscdn.com/cmsMedia/1606e8a0-685f-4c31-8319-4b592f1ca086.jpg" alt="" />
            <img  className='h-70 w-310  'src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg" alt="" />
            
            <div className='h-28 w-310 border border-gray-300 flex items-center justify-between'>
              <div className='flex items-center'> 
                <img  className=' '  src="https://media.istockphoto.com/id/1323529010/vector/fire-vector-isolated.jpg?s=612x612&w=0&k=20&c=ta6bKkXZDuqy2H3tRhR79sSl_-fdGhKyoenbbjEr3l0=" alt=""  height={"80px"} width={"80px"} />
                <div>
                    <p className='text-2xl '>Get access to exclusive deals</p>
                    <p className='text-gray-600'>Only the best deals reach your inbox</p>
                </div>
               </div>
               <p className='text-gray-400  text-xs relative bottom-6 bg-white left-65'>Your email</p>
               <div className='flex items-center'>
                <input className='mr-3 border border-gray-300 text-gray-500 p-2 w-80 rounded-xl h-13'  type="text" placeholder='e.g., alen@email.com' />
                <button className= ' mr-3 bg-red-500 h-12 w-29 text-white cursor-pointer  rounded-xl'>Notify Me</button>
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default Body