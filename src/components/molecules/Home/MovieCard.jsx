import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

function MovieCard({ URL, limit }) {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState(new Map());

  useEffect(() => {
    async function fetchData(URL) {
      try {
        const options = {
          method: "GET",
          url: URL,
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        };
        // console.log(options)
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    const getData = async () => {
      const dataMovies = await fetchData(URL);
      const dataGenres = await fetchData(import.meta.env.VITE_API_URL_GENRE);

      // console.log(dataGenres.genres)

      setMovies(dataMovies.results.slice(0, limit));
      const mapGenres = new Map();
      dataGenres.genres.map((value) => {
        // console.log(value.id)
        mapGenres.set(value.id, value.name);
      });

      setGenres(mapGenres);
    };

    getData();
  }, [URL, limit]);

  return (
    <>
      {movies.length > 0 &&
        movies.map((data, idx) => (
          <div
            className="card-movie w-full flex flex-col gap-[12px] justify-between"
            key={idx}
          >
            <div className="group imgContent w-full [aspect-ratio:3/5] relative">
              <div className="w-full h-full absolute z-1">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt={data.title}
                />
              </div>

              <div className="w-full h-full absolute flex justify-center items-center z-2 group-hover:bg-[rgba(0,_0,_0,_0.4)]">
                <ul className="flex flex-col justify-between items-center gap-[20px] h-1/5 w-[70%]">
                  <li>
                    <button
                      onClick={() => navigate(`/movies/${data.id}`)} 
                      className="group-hover:block px-[18px] py-[12px] w-full h-full font-normal text-[14px] tracking-[0.75px] no-underline rounded-[5px] hidden border-[1px] border-[#FFFFFF] text-[#FFFFFF]"
                    >
                      Details
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group-hover:block px-[18px] py-[12px] w-full h-full font-normal text-[14px] tracking-[0.75px] no-underline rounded-[5px] hidden text-[#FFFFFF] bg-[#1D4ED8]"
                    >
                      Buy Ticket
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-[175px] [aspect-ratio:135/25] rounded-tl-[10px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[0] bg-[#1D4ED8] text-center absolute top-[-10px] -left-[15px] z-3">
                <p className="font-normal text-[14px] leading-[24px] tracking-[0.75px] text-[#FFFFFF]">
                  Recommended
                </p>
              </div>

              <div className="absolute -left-[9px] top-[10px] w-[25px] [aspect-ratio:1/1] bg-[#163899] [rotate:45deg] z-0 "></div>
            </div>

            <div className="titleContent">
              <h1 className="font-bold text-[24px] tracking-[1px] leading-[34px] [word-wrap:break-word] text-[#14142B]">
                {data.title}
              </h1>
            </div>

            <div className="genreContent">
              <ul className="font-bold text-[24px] tracking-[1px] leading-[34px] [word-wrap:break-word] text-[#14142B] flex flex-row gap-[5px]">
                {data.genre_ids.slice(0, 2).map((genreId) => (
                  <li
                    className="px-[10px] rounded-[25px] bg-[#A0A3BD1A] [list-style:none] text-[#A0A3BD] font-normal text-[16px] tracking-[0.75px] leading-[32px]"
                    key={genreId}
                  >
                    {genres.get(genreId)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </>
  );
}

export default MovieCard;
