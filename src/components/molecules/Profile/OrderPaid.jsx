import React from "react";

function OrderPaid() {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg font-sans w-full px-[40px] pb-[30px] flex flex-row gap-[20px]">
        <div className="flex flex-col items-center gap-[10px]">
          {/* <!-- Ticket Info --> */}
          <h1 className="text-[18px] text-[#14142B] tracking-[0.75px]">
            Ticket Information
          </h1>
          {/* <!-- QR Code --> */}
          <div className="w-[171px] aspect-[1/1] bg-gray-200 rounded flex justify-center items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=MovieTicket"
              alt="QR Code"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-end pb-[30px] pl-[20px]">
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Category
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                PG-13
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Time
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                2:00pm
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Seats
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                C4, C5, C6
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Movie
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                Spider-Man: ..
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Date
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                07 Jul
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[#AAAAAA] font-semibold text-[12px] tracking-[0.75px]">
                Count
              </h2>
              <p className="text-[#14142B] font-semibold text-[14px] tracking-[0.75px]">
                3 pcs
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center pb-[65px]">
          <h2 className="text-[#000000] font-normal text-[16px] tracking-[0.75px]">Total</h2>
          <p className="text-[#000000] font-normal text-[24px] tracking-[0.75px]">$30.00</p>
        </div>

      </div>
    </>
  );
}

export default OrderPaid;
