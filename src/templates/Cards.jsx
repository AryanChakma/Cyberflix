import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[3%] bg-[#1F1E24]">
      {data.map((c,i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`}className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              c.backdrop_path || c.poster_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">{c.name || c.title || c.original_name || c.original_title}</h1>

          <div className="absolute right-[8%] bottom-[30%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5.5vh] h-[5.5vh] flex justify-center items-center">{(c.vote_average * 10).toFixed()}<sup>%</sup></div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
