import axios from "../Utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import Cards from "../templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const TVshows = () => {

    document.title = "Cyberflix | TV Shows ";
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const GetTVshows = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
  
        if (data.results.length > 0) {
          settv((prevState) => [...prevState, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
  
    const refreshHandler = () => {
      if (tv.length === 0) {
        GetTVshows();
      } else {
        setpage(1);
        settv([]);
        GetTVshows();
      }
    };
  
    useEffect(() => {
      refreshHandler();
    }, [category]);

    return tv.length > 0 ? (
        <div className="w-screen h-screen">
          <div className="px-[3%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line"
              ></i>{" "}
              TV Shows | {category}
            </h1>
    
            <div className="flex items-center w-[80%]">
              <Topnav />
              <Dropdown
                title="Category"
                options={["popular", "top_rated", "upcoming", "now_playing"]}
                func={(e) => setcategory(e.target.value)}
              />
    
              <div className="w-[2%]"></div>
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={tv.length}
            next={GetTVshows}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            <Cards data={tv} title="tv" />
          </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default TVshows