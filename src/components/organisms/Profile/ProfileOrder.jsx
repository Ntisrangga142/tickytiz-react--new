import React from "react";
import OrderUnPaid from "../../molecules/Profile/OrderUnPaid.jsx";
import OrderPaid from "../../molecules/Profile/OrderPaid.jsx";

function ProfileOrder() {
  return (
    <>
      <div className="space-y-4 w-full mx-auto">
        <div className="rounded-xl shadow-sm bg-white">
          <div className="p-[40px]">
            <div className="flex justify-between items-center mb-2 text-[#AAAAAA] text-[14px]">
              <span>Tuesday, 07 July 2020 - 04:30pm</span>
              <div className="w-[160px] h-[60px] flex items-center">
                <img className="w-full object-cover" src="/assets/imgs/cinema/cinema.png" alt="" />
              </div>
            </div>
            <h2 className="text-[24px] tracking-[0.75px] font-semibold mb-3 text-[#000000]">
              Spider-Man: Homecoming
            </h2>
          </div>

          <hr className="border-[#DEDEDE]"/>

          <div className="px-[40px] py-[30px] flex flex-row justify-between">
            <div className="flex gap-2 mb-3">
              <span className="w-[196px] h-[40px] bg-[#00BA8833] text-[#00BA88] text-[14px] font-medium rounded-md flex justify-center items-center">
                <p>Ticket in active</p>
              </span>
              <span className="w-[171px] h-[40px] bg-[#E82C2C33] text-[#E82C2C] text-[14px] font-medium rounded-md flex justify-center items-center">
                <p>Not Paid</p>
              </span>
            </div>
            <button className="text-[#AAAAAA] text-[18px] flex items-center gap-1 hover:text-gray-700">
              Show Details
              <img src="/assets/imgs/icon/Forward.png" alt="icon-arrow-bot"/>
            </button>

            
          </div>
          <OrderUnPaid />
        </div>
      </div>

      <div className="space-y-4 w-full mx-auto">
        <div className="rounded-xl shadow-sm bg-white">
          <div className="p-[40px]">
            <div className="flex justify-between items-center mb-2 text-[#AAAAAA] text-[14px]">
              <span>Monday, 14 June 2020 - 02:00pm</span>
              <div className="w-[160px] h-[60px] flex items-center">
                <img className="w-full object-cover" src="/assets/imgs/cinema/cinema-1.png" alt="" />
              </div>
            </div>
            <h2 className="text-[24px] tracking-[0.75px] font-semibold mb-3 text-[#000000]">
              Avengers: End Game
            </h2>
            
          </div>

          <hr classNameName="border-[#DEDEDE]"/>
          <div className="px-[40px] py-[30px] flex flex-row justify-between">
            <div className="flex gap-2 mb-3">
              <span className="w-[196px] h-[40px] bg-[#6E719133] text-[#6E7191] text-[14px] font-medium rounded-md flex justify-center items-center">
                <p>Ticket used</p>
              </span>
              <span className="w-[171px] h-[40px] bg-[#1D4ED833] text-[#1D4ED8] text-[14px] font-medium rounded-md flex justify-center items-center">
                <p>Not Paid</p>
              </span>
            </div>
            <button className="text-[#AAAAAA] text-[18px] flex items-center gap-1 hover:text-gray-700">
              Show Details
              <img src="/assets/imgs/icon/Forward.png" alt="icon-arrow-bot"/>
            </button>
          </div>
          <OrderPaid/>
        </div>
      </div>
    </>
  );
}

export default ProfileOrder;
