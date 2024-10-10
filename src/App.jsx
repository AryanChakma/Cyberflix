import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TVshows from "./components/TVshows";
import Tvdetails from "./components/Tvdetails";
import Mdetails from "./components/Mdetails";
import Trailer from "./templates/Trailer";

const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Mdetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TVshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
      </Routes>
    </div>
  );
};

export default App;
