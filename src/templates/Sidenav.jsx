import React from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {
    

  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-5'>
        <h1 className='text-2xl text-white font-bold'>
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className='text-2xl'>Cyberflix</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
            <h1 className='text-white font-semibold text-xl mt-7 mb-3'>
                New Feeds
            </h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  p-2'>
                <i className="mr-1 ri-fire-fill"></i>
                Trending
            </Link>
            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  p-2'>
                <i className="mr-1 ri-bard-fill"></i>
                Popular
            </Link>
            <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  p-2'>
                <i className="mr-1 ri-movie-2-fill"></i>
                Movies
            </Link>
            <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  p-2'>
                <i className="mr-1 ri-tv-2-fill"></i>
                TV Shows
            </Link>
            <hr className='border-none h-[1px] bg-zinc-400'/>
        </nav>
        
    </div>
  )
}

export default Sidenav