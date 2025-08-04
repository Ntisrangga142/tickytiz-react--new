import React from "react";

import IconCalender from "/assets/imgs/icon/calendar (1) 1.png"
import Eye from "/assets/imgs/icon/Eye.png"
import Edit from "/assets/imgs/icon/Edit.png"
import Delete from "/assets/imgs/icon/Delete.png"

import imagePoster from "/assets/imgs/movies/movie-4.png"


function DashboardListMovie() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-start justify-center p-4 ">
      <div className="bg-white rounded-2xl shadow-md w-full p-6">
        {/* <!-- Header --> */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">List Movie</h2>
          <div className="flex items-center space-x-2">
            {/* <!-- Date Selector --> */}
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-gray-600 w-[284px] h-[56px] gap-[10px]">
              <img src={IconCalender} alt="icon-calender" className="w-[18px] h-[18px]" />
              <span>November 2023</span>
            </div>
            {/* <!-- Add Movie Button --> */}
            <button className="bg-[#1D4ED8] text-white px-4 py-2 rounded-lg hover:bg-[#1D4ED8] transition h-[56px]">
              Add Movies
            </button>
          </div>
        </div>

        {/* <!-- Tables --> */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-gray-500 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Thumbnail</th>
                <th className="px-4 py-3">Movie Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Released Date</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Row 1 --> */}
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">
                  <img
                    src={imagePoster}
                    className="w-10 h-10 rounded-[10px]"
                    alt="movie thumb"
                  />
                </td>
                <td className="px-4 py-3 text-[#1D4ED8] hover:underline cursor-pointer">
                  Spiderman HomeComing
                </td>
                <td className="px-4 py-3">Action, Adventure</td>
                <td className="px-4 py-3">07/05/2023</td>
                <td className="px-4 py-3">2 Hours 15 Minute</td>
                <td className="px-4 py-3 flex justify-center space-x-2">
                  <button className="bg-[#1D4ED8] text-white p-2 rounded hover:bg-[#1D4ED8]">
                    <img src={Eye} alt="icon-eye" className="object-fit"/>
                  </button>
                  <button className="bg-[#5D5FEF] text-white p-2 rounded hover:bg-[#5D5FEF]">
                    <img src={Edit} alt="icon-edit" className="w-4 h-4"/>
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                    <img src={Delete} alt="icon-delete" className="w-4 h-4"/>
                  </button>
                </td>
              </tr>

              {/* <!-- Tambahkan row lain sesuai data --> */}
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">
                  <img
                    src={imagePoster}
                    className="w-10 h-10 rounded-[10px]"
                    alt="movie thumb"
                  />
                </td>
                <td className="px-4 py-3 text-[#1D4ED8] hover:underline cursor-pointer">
                  Avengers End Game
                </td>
                <td className="px-4 py-3">Sci-fi, Adventure</td>
                <td className="px-4 py-3">10/06/2023</td>
                <td className="px-4 py-3">2 Hours 15 Minute</td>
                <td className="px-4 py-3 flex justify-center space-x-2">
                  <button className="bg-[#1D4ED8] text-white p-2 rounded hover:bg-[#1D4ED8]">
                    <img src={Eye} alt="icon-eye" className="object-fit"/>
                  </button>
                  <button className="bg-[#5D5FEF] text-white p-2 rounded hover:bg-[#5D5FEF]">
                    <img src={Edit} alt="icon-edit" className="w-4 h-4"/>
                  </button>
                  <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                    <img src={Delete} alt="icon-delete" className="w-4 h-4"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Pagination --> */}
        <div className="flex justify-center mt-4 space-x-2">
          <button className="px-3 py-1 rounded bg-[#1D4ED8] text-white">1</button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            3
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            4
          </button>
        </div>
      </div>
    </main>
  );
}

export default DashboardListMovie;
