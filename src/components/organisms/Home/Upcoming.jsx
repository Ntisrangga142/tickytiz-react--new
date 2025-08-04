import React from "react";
import MovieCard from "../../molecules/Home/MovieCard.jsx";

function Upcoming() {
  const URL_API = import.meta.env.VITE_API_URL_UPCOMING;

  const limit = 4;

  return (
    <>
      <section className="flex flex-col gap-7 py-4 px-[130px] mb-[25px]">
        {/* Header */}
        <div className="grid grid-cols-2 items-center">
          {/* Title */}
          <div className="flex flex-col gap-[14px]">
            <h2 className="font-bold text-[18px] tracking-[0.75px] text-[#1D4ED8]">
              UPCOMING MOVIES
            </h2>
            <h1 className="text-[32px] font-normal tracking-[1px] w-full">
              Exciting Movie Coming Soon
            </h1>
          </div>

          {/* Arrows */}
          <div className="flex justify-end items-center gap-[14px]">
            <a
              href="#"
              className="p-[15px] rounded-full bg-[#A0A3BD] text-center"
            >
              <img
                src="./assets/imgs/home/icon/arrow-left.png"
                alt="arrow-left.png"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="p-[15px] rounded-full bg-blue-700 text-center"
            >
              <img
                src="./assets/imgs/home/icon/arrow-right.png"
                alt="arrow-right.png"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
        
        <div className="w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px]">
          <MovieCard URL={URL_API} limit={limit} />
        </div>
      </section>
    </>
  );
}

export default Upcoming;
