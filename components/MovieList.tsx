import React, { useState, useCallback } from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
interface MovieListProps {
  data: Record<string, any>[];
  title: string;
  movieKey: string;
}
interface SliderElement extends HTMLElement {
  sliderContainer: HTMLDivElement;
  currentIndex: number;
}

const MovieList: React.FC<MovieListProps> = ({ data, title, movieKey }) => {
  const [hoverTrigger, setHoverTrigger] = useState(false);
  const [clickSlider, setClickSlider] = useState(false);

  const handleClickSlider = useCallback(
    (key: string) => {
      setClickSlider(false);
      if (typeof document !== "undefined") {
        const slider = document.querySelector(`.${movieKey}`) as SliderElement;
        slider.sliderContainer = slider.querySelector(
          ".slider-container"
        ) as HTMLDivElement;
        slider.currentIndex = 1;
        if (key === "pre") {
          slider.currentIndex--;
          slider.sliderContainer.style.transform = `translateX(${
            slider.currentIndex * 33.33
          }%)`;
        } else {
          slider.currentIndex++;
          slider.sliderContainer.style.transform = `translateX(-${
            slider.currentIndex * 33.33
          }%)`;
        }
      }
    },
    [clickSlider]
  );
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
        <div
          onClick={() => {
            setClickSlider(true);
            handleClickSlider("pre");
          }}
          className={`flex items-center justify-center ${
            hoverTrigger ? " bg-hsla" : ""
          }`}
        >
          <BsChevronCompactLeft
            size={45}
            className={`
            prev-button
            style={{background: "hsla(0, 0%, 8%, .7)"}}
            text-white 
            cursor-pointer 
            transition
            duration 
            group-hover:opacity-90 
            shawdow-xl 
            delay-150 ${hoverTrigger ? "z-20" : "text-zinc-900"}`}
          />
        </div>
        <div
          className={`flex flex-nowrap transition duration-500 ease-in z-10 ${movieKey}`}
        >
          <div className="flex slider-container transition transform duration-500 ease-in">
            {(data ?? []).map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </div>
        <div
          onClick={() => {
            setClickSlider(true);
            handleClickSlider("next");
          }}
          className={`${
            hoverTrigger ? "z-20 bg-hsla" : "text-zinc-900"
          } flex items-center justify-center `}
        >
          <BsChevronCompactRight
            size={45}
            className={`
              text-white 
                next-button
                m-auto 
                cursor-pointer 
                transition
                duration  
                delay-150 
                shawdow-xl
                group-hover:opacity-90 
                ${hoverTrigger ? "" : "text-zinc-900"}
                `}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
