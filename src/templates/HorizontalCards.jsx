import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-[100%] flex  overflow-y-hidden mb-3 p-3'>
        {data.map((d,i) => (
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-[35%] bg-zinc-900 mr-3 mb-3'>
                <img className='w-full h-[55%] object-cover' 
                    src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} 
                    alt="" 
                />
                <div className=' text-white p-2 h-[45%]'>
                <h1 className='text-xl font-semibold'>
                    {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className=''>
                    {d.overview.slice(0, 50)}...
                    <span className='text-zinc-500'> more</span>
                </p>
                </div>
            </Link>
        ))}
    </div>
 
  )
}

export default HorizontalCards