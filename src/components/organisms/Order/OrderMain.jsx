import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

function OrderMain() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const seatRows = ["A", "B", "C", "D", "E", "F", "G"];
  const leftCols = 7;   // kolom kiri
  const rightCols = 7;  // kolom kanan
  const pricePerSeat = 10;

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Kursi terjual & love nest
  const soldSeats = ["B3", "E10", "F11"];
  const loveNestSeats = ["F11", "F12"];

  // Fetch movie details
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

  useEffect(() => {
    fetchMovie();
  }, []);

  const toggleSeat = (seat) => {
    if (soldSeats.includes(seat) || loveNestSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalPayment = selectedSeats.length * pricePerSeat;

  if (!movie) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <main className="flex flex-col md:flex-row gap-10 px-6 md:px-20 py-10">
      {/* Left Section */}
      <div className="flex-1">
        {/* Stepper */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>
              <p className="text-xs mt-1 text-gray-600">Dates And Time</p>
            </div>
            <span className="h-[2px] w-10 bg-gray-300"></span>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                2
              </div>
              <p className="text-xs mt-1 text-gray-600">Seat</p>
            </div>
            <span className="h-[2px] w-10 bg-gray-300"></span>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700">
                3
              </div>
              <p className="text-xs mt-1 text-gray-600">Payment</p>
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-20 rounded"
            />
            <div>
              <h1 className="font-bold text-lg">{movie.title}</h1>
              <div className="flex gap-2 my-2">
                {movie.genres?.slice(0, 2).map((g) => (
                  <span
                    key={g.id}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">Regular - 13:00 PM</p>
            </div>
          </div>
          <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
            Change
          </button>
        </div>

        {/* Seat Selection */}
        <h2 className="text-lg font-semibold mb-4">Choose Your Seat</h2>
        <div className="bg-white rounded-lg shadow p-4">
          {/* Screen */}
          <div className="text-center mb-6">
            <div className="bg-gray-300 h-1 w-full rounded-full mb-2"></div>
            <p className="text-xs text-gray-500">Screen</p>
          </div>

          {/* Kursi */}
          <div className="space-y-3">
            {seatRows.map((row) => (
              <div key={row} className="flex items-center gap-4">
                <span className="w-5 text-sm font-medium">{row}</span>

                {/* Blok kiri (1-7) */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: leftCols }).map((_, i) => {
                    const seat = `${row}${i + 1}`;
                    const isSold = soldSeats.includes(seat);
                    const isLove = loveNestSeats.includes(seat);
                    const isSelected = selectedSeats.includes(seat);

                    return (
                      <div
                        key={seat}
                        onClick={() => toggleSeat(seat)}
                        disabled={isSold || isLove}
                        className={`w-8 h-8 rounded text-xs flex items-center justify-center
                          ${
                            isSold
                              ? "bg-gray-500 text-white cursor-not-allowed"
                              : isSelected
                              ? "bg-blue-600 text-white"
                              : isLove
                              ? "bg-pink-400 text-white cursor-not-allowed"
                              : "bg-gray-200 hover:bg-blue-100"
                          }`}
                      >
                      </div>
                    );
                  })}
                </div>

                {/* Jarak tengah */}
                <div className="w-6"></div>

                {/* Blok kanan (8-14) */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: rightCols }).map((_, i) => {
                    const seat = `${row}${i + 8}`;
                    const isSold = soldSeats.includes(seat);
                    const isLove = loveNestSeats.includes(seat);
                    const isSelected = selectedSeats.includes(seat);

                    return (
                      <div
                        key={seat}
                        onClick={() => toggleSeat(seat)}
                        disabled={isSold || isLove}
                        className={`w-8 h-8 rounded text-xs flex items-center justify-center
                          ${
                            isSold
                              ? "bg-gray-500 text-white cursor-not-allowed"
                              : isSelected
                              ? "bg-blue-600 text-white"
                              : isLove
                              ? "bg-pink-400 text-white cursor-not-allowed"
                              : "bg-gray-200 hover:bg-blue-100 "
                          }`}
                      >
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Seat Key */}
          <div className="flex gap-6 mt-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-400 rounded"></div>
              <span>Love nest</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span>Sold</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6 h-fit">
        <h2 className="text-xl font-bold text-blue-700 mb-4">CineOne21 Cinema</h2>
        <div className="text-sm text-gray-600 mb-4">
          <p>
            Movie selected: <span className="font-semibold">{movie.title}</span>
          </p>
          <p>Tuesday, 07 July 2020</p>
          <p>13:00pm</p>
          <p>One ticket price: ${pricePerSeat}</p>
          <p>
            Seat choosed:{" "}
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "-"}
          </p>
        </div>
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Total Payment</span>
          <span className="text-blue-700">${totalPayment}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700" onClick={() => navigate(`/ticket`)} >
          Checkout now
        </button>
      </div>
    </main>
  );
}

export default OrderMain;
