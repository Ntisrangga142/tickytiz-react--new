import React from "react";

function Subscribe() {
  return (
    <>
      <section className="subscribe px-6 md:px-[130px] py-[85px]">
        <div className="w-full h-auto md:h-[318px] flex flex-col justify-center items-center gap-[48px] bg-[url('../assets/imgs/home/bg/BG.png')] bg-cover bg-center py-10 px-4">
          <h1 className="text-white font-normal text-[32px] md:text-[48px] tracking-[1px] text-center">
            Subscribe to our newsletter
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[11px] w-full md:w-[732px]">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              className="w-full h-[60px] text-[16px] font-normal border border-zinc-300 rounded px-4 bg-transparent placeholder-white"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="w-full h-[60px] text-[16px] font-normal border border-zinc-300 rounded px-4 bg-transparent placeholder-white"
            />
            <button
              type="submit"
              className="text-[#1D4ED8] bg-white w-full h-[64px] rounded text-[18px] font-bold border-none"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
