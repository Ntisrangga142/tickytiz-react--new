import React from "react";
import MovieCard from "../../molecules/Home/MovieCard";

function MovieList() {
  const URL = import.meta.env.VITE_API_URL_POPULAR;

  const limit = 12;

  return (
    <>
      <main className="px-6 md:px-[130px] py-[60px] flex flex-col gap-[60px]">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          {/* Search */}
          <div className="flex flex-col gap-3 relative w-full md:w-[510px]">
            <p className="text-[#4E4B66] text-[16px] font-semibold">
              Cari Event
            </p>
            <div className="relative">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="New Born Expert"
                className="w-full h-[64px] pl-10 pr-4 border border-[#DEDEDE] rounded text-[#A0A3BD] text-[16px]"
              />
              <img
                src="../assets/imgs/icon/search1.png"
                alt="icon-search.png"
                className="absolute top-[20px] left-[10px] w-[24px] h-[24px]"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-col gap-3 w-full">
            <p className="text-[#4E4B66] text-[16px] font-semibold">Filter</p>
            <ul className="flex items-center gap-3 flex-wrap">
              {["Thriller", "Horror", "Romantic", "Adventure", "Sci-fi"].map(
                (genre, i) => (
                  <li key={genre} className="list-none">
                    <a
                      href="#"
                      className={`text-[#4E4B66] text-[16px] font-medium px-[24px] py-[10px] rounded-[10px] ${
                        i === 0 ? "bg-[#1D4ED8] text-white" : ""
                      }`}
                    >
                      {genre}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Movie Cards Grid */}
        <div className="w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[20px] gap-y-[20px]">
          <MovieCard URL={URL} limit={limit} />
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-[60px]">
          <ul className="flex gap-[20px] items-center justify-center">
            {[1, 2, 3, 4].map((page, i) => (
              <li key={page} className="list-none">
                <a
                  href="#"
                  className={`px-[15px] py-[10px] text-[16px] font-medium rounded-full ${
                    i === 0 ? "bg-[#1D4ED8] text-white" : ""
                  }`}
                >
                  {page}
                </a>
              </li>
            ))}
            <li className="list-none">
              <a
                href="#"
                className="p-[20px] flex items-center justify-center bg-[#1D4ED8] rounded-full"
              >
                <img
                  src="../assets/imgs/home/icon/arrow-right.png"
                  alt="next"
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default MovieList;
