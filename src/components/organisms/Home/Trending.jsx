import MovieCard from "../../molecules/Home/MovieCard.jsx";

function Trending() {
  const URL = import.meta.env.VITE_API_URL_TRENDING;

  const limit = 4;

  return (
    <section className="py-[16px] px-[130px] flex justify-center">
      <div className="flex flex-col justify-between items-center gap-[14px] w-full">
        <div className="text-center">
          <h2 className="font-bold text-[18px] tracking-[0.75px] text-[#1D4ED8]">
            MOVIES
          </h2>
        </div>

        <div className="text-center w-[545px]">
          <h1 className="text-[32px] leading-[45px] font-normal tracking-[1px] text-[#121212]">
            Exciting Movies That Should Be Watched Today
          </h1>
        </div>

        <div className="w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-[20px]">
          <MovieCard URL={URL} limit={limit} />
        </div>

        <div className="w-full mt-[25px] text-center">
          <a className="font-bold text-[18px] tracking-[1px] no-underline text-[#1D4ED8]">
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trending;
