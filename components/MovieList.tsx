import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}
const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  const [hoverTrigger, setHoverTrigger] = useState(false);
  // useEffect(() => {
  //   setHoverTrigger(!!hoverTrigger);
  // }, [hoverTrigger]);
  if (isEmpty(data)) return null;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div
        onMouseMove={() => setHoverTrigger(true)}
        onMouseLeave={() => setHoverTrigger(false)}
        className="flex"
      >
        <BsChevronCompactLeft
          size={65}
          className={`text-white m-auto cursor-pointer group-hover:origin-center ${
            hoverTrigger ? "" : "text-zinc-900"
          }`}
        />
        <div className="flex flex-nowrap transition duration-500 ease-in">
          {(data ?? []).map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
        <BsChevronCompactRight
          size={65}
          className={`text-white m-auto cursor-pointer group-hover:origin-center ${
            hoverTrigger ? "z-20" : "text-zinc-900"
          }`}
        />
      </div>
    </div>
  );
};

export default MovieList;
