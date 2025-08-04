import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { Link } from "lucide-react";

function Main() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState(new Map());
  const [release, setRelease] = useState();
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState("");

  const fetchGenres = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL_GENRE, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      });

      const map = new Map();
      res.data.genres.forEach((g) => map.set(g.id, g.name));
      setGenres(map);
    } catch (err) {
      console.error("Error fetching genres:", err);
    }
  };

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchDates = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/release_dates`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );

      const usRelease = response.data.results.find(
        (item) => item.iso_3166_1 === "US"
      );

      let releaseDate = usRelease?.release_dates[0]?.release_date;

      if (releaseDate) {
        releaseDate = new Date(releaseDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } else {
        releaseDate = "No release date available";
      }

      setRelease(releaseDate);
    } catch (error) {
      console.error("Error fetching release date:", error);
    }
  };

  const fetchCredits = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );

      // Ambil Director dari crew
      const directorData = response.data.crew.find(
        (person) => person.job === "Director"
      );
      setDirector(directorData ? directorData.name : "Unknown");

      // Ambil 3 cast teratas
      const topCast = response.data.cast.slice(0, 3).map((c) => c.name);
      setCast(topCast);
    } catch (error) {
      console.error("Error fetching credits:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
    fetchMovie();
    fetchDates();
    fetchCredits();
  }, []);

  if (!movie.title) return <div className="text-center mt-20">Loading...</div>;

  return (
    <>
      <main className="relative w-full">
        {/* Hero Background */}
        <div
          className="w-full h-[415px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: "50% 16%",
          }}
        />

        {/* Movie Poster */}
        <div className="absolute top-[250px] left-[130px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[264px] h-[405px]"
          />
        </div>

        {/* Movie Info */}
        <div className="absolute top-[450px] left-[450px] flex flex-col gap-[20px]">
          <h1 className="font-bold text-[32px] tracking-[1px]">
            {movie.title}
          </h1>
          <ul className="flex gap-[7px]">
            {movie.genre_ids
              ? movie.genre_ids.slice(0, 2).map((genreId) => (
                  <li
                    className="bg-[#A0A3BD] text-[16px] px-[15px] py-[5px] rounded-[20px] tracking-[0.75px]"
                    key={genreId}
                  >
                    {genres.get(genreId)}
                  </li>
                ))
              : movie.genres?.slice(0, 2).map((g) => (
                  <li
                    key={g.id}
                    className="bg-[#A0A3BD] text-[16px] px-[15px] py-[5px] rounded-[20px] tracking-[0.75px]"
                  >
                    {g.name}
                  </li>
                ))}
          </ul>
          <div className="grid grid-cols-[0.5fr_1fr] grid-rows-[0.5fr_1fr] gap-4 w-full">
            <div>
              <h2 className="text-sm text-[#8692A6] tracking-[0.75px]">
                Release date
              </h2>
              <p className="text-base text-[#121212] tracking-[0.75px]">
                {release}
              </p>
            </div>
            <div>
              <h2 className="text-sm text-[#8692A6] tracking-[0.75px]">
                Directed by
              </h2>
              <p className="text-base text-[#121212] tracking-[0.75px]">
                {director}
              </p>
            </div>
            <div>
              <h2 className="text-sm text-[#8692A6] tracking-[0.75px]">
                Duration
              </h2>
              <p className="text-base text-[#121212] tracking-[0.75px]">
                {movie.runtime
                  ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                  : "Unknown"}
              </p>
            </div>
            <div>
              <h2 className="text-sm text-[#8692A6] tracking-[0.75px]">Cast</h2>
              <p className="text-base text-[#121212] tracking-[0.75px]">
                {cast.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-[300px] px-[130px] w-[1050px] flex flex-col gap-[20px]">
          <h1 className="text-[20px] font-semibold text-black tracking-[0.5px]">
            Synopsis
          </h1>
          <p className="text-[#A0A3BD] text-[16px] tracking-[0.5px] leading-[32px]">
            {movie.overview || "No synopsis available."}
          </p>
        </div>

        {/* Booking Filters */}
        <div className="px-[130px] mt-[50px]">
          <h1 className="text-[32px] tracking-[1px] text-[#121212] leading-[45px] font-normal">
            Book Tickets
          </h1>
          <div className="flex gap-[30px] mt-[15px]">
            {/* Date */}
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="date"
                className="text-[20px] font-semibold text-black tracking-[0.5px]"
              >
                Choose Date:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  className="bg-[#EFF0F6] w-[284px] h-[56px] pl-[50px] rounded-[6px] border-none"
                />
                <img
                  src="../assets/imgs/icon/calendar (1) 1.png"
                  className="absolute top-[20px] left-[20px]"
                />
                <img
                  src="../assets/imgs/icon/Forward.png"
                  className="absolute top-[28px] right-[15px]"
                />
              </div>
            </div>

            {/* Time */}
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="time"
                className="text-[20px] font-semibold text-black tracking-[0.5px]"
              >
                Choose Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  className="bg-[#EFF0F6] w-[284px] h-[56px] pl-[50px] rounded-[6px] border-none"
                />
                <img
                  src="../assets/imgs/icon/time.png"
                  className="absolute top-[20px] left-[20px]"
                />
                <img
                  src="../assets/imgs/icon/Forward.png"
                  className="absolute top-[28px] right-[15px]"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor="location"
                className="text-[20px] font-semibold text-black tracking-[0.5px]"
              >
                Choose Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="bg-[#EFF0F6] w-[284px] h-[56px] pl-[50px] rounded-[6px] border-none"
                />
                <img
                  src="../assets/imgs/icon/entypo_location.png"
                  className="absolute top-[20px] left-[20px]"
                />
                <img
                  src="../assets/imgs/icon/Forward.png"
                  className="absolute top-[28px] right-[15px]"
                />
              </div>
            </div>

            {/* Filter Button */}
            <div className="flex flex-col justify-end">
              <button className="w-[188px] h-[56px] bg-blue-700 text-white rounded">
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Cinema List */}
        <div className="flex flex-col gap-[10px] px-[130px] mt-[25px] mb-[20px]">
          <div className="flex gap-[25px] items-center">
            <h1 className="text-[20px] font-semibold tracking-[0.5px] text-black leading-[34px]">
              Choose Cinema
            </h1>
            <h2 className="text-[18px] font-bold text-[#8692A6] tracking-[0.75px] leading-[24px]">
              39 Result
            </h2>
          </div>
          <div className="flex justify-around gap-[10px]">
            {["cinema-1", "cinema-2", "cinema-3", "cinema-1"].map((img, i) => (
              <a
                key={i}
                href="#"
                className={`w-[264px] h-[157px] border-2 border-[#DEDEDE] rounded-[8px] flex justify-center items-center ${
                  i === 1 ? "bg-blue-700" : ""
                }`}
              >
                <img src={`../assets/imgs/cinema/${img}.png`} alt={img} />
              </a>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-[8px]">
          {[1, 2, 3, 4].map((n, i) => (
            <a
              key={n}
              href="#"
              className={`w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border ${
                i === 0
                  ? "bg-blue-700 text-white"
                  : "text-[#4E4B66] border-[#DEDEDE]"
              }`}
            >
              {n}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <div
          className="flex justify-center items-center mt-[25px]"
        >
          <button
            className="w-[188px] h-[56px] bg-blue-700 text-white rounded mt-[25px]"
            onClick={() => navigate(`/order/${movie.id}`)}
          >
            Book Now
          </button>
        </div>
      </main>
    </>
  );
}

export default Main;
