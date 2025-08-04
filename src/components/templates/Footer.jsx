import React from "react";

function Footer() {
  return (
    <>
      <section className="subscribe px-6 md:px-[130px] pt-[100px] pb-0 w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-2 gap-y-10 md:h-[435px]">
        <div className="flex flex-col md:flex-row gap-[85px] md:col-span-1 md:row-span-1">
          <div className="w-[285px] flex flex-col gap-[15px]">
            <img
              src="/assets/imgs/logo/logo-1.png"
              alt="logo-1.png"
              className="w-[183.79px] h-[71.35px] object-contain"
            />
            <p className="text-[#6E7191] font-normal text-[16px] tracking-[0.75px] leading-[32px]">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div className="flex flex-col gap-[50px] mt-[20px]">
            <h2 className="text-black font-bold text-[16px] tracking-[0.5px]">
              Explore
            </h2>
            <ul className="flex flex-col gap-[15px]">
              <li className="list-none">
                <a
                  href=""
                  className="text-[#4E4B66] font-normal text-[14px] tracking-[0.5px] no-underline"
                >
                  Cinemas
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="text-[#4E4B66] font-normal text-[14px] tracking-[0.5px] no-underline"
                >
                  Movies List
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="text-[#4E4B66] font-normal text-[14px] tracking-[0.5px] no-underline"
                >
                  My Ticket
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="text-[#4E4B66] font-normal text-[14px] tracking-[0.5px] no-underline"
                >
                  Notification
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around md:col-span-1 md:row-span-1">
          <div className="flex flex-col gap-[50px] mt-[20px]">
            <h2 className="text-black font-bold text-[16px] tracking-[0.5px]">
              Explore
            </h2>
            <ul className="flex flex-col gap-[15px]">
              <li className="list-none">
                <img
                  src="/assets/imgs/home/sponsor/sp1.png"
                  alt="sponsor-1.png"
                />
              </li>
              <li className="list-none">
                <img
                  src="/assets/imgs/home/sponsor/sp2.png"
                  alt="sponsor-2.png"
                />
              </li>
              <li className="list-none">
                <img
                  src="/assets/imgs/home/sponsor/sp3.png"
                  alt="sponsor-3.png"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[50px] mt-[20px]">
            <h2 className="text-black font-bold text-[16px] tracking-[0.5px]">
              Explore
            </h2>
            <ul className="flex flex-col gap-[15px]">
              <li className="list-none">
                <a
                  href=""
                  className="flex items-center text-[#4E4B66] text-[14px] tracking-[0.5px]"
                >
                  <img
                    src="/assets/imgs/home/feather/sp-facebook.png"
                    alt="icon-fb.png"
                    className="w-6 h-6 mr-5"
                  />
                  Tickitz Cinema id
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="flex items-center text-[#4E4B66] text-[14px] tracking-[0.5px]"
                >
                  <img
                    src="/assets/imgs/home/feather/sp-ig.png"
                    alt="icon-ig.png"
                    className="w-6 h-6 mr-5"
                  />
                  tickitz.id
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="flex items-center text-[#4E4B66] text-[14px] tracking-[0.5px]"
                >
                  <img
                    src="/assets/imgs/home/feather/sp-twitter.png"
                    alt="icon-twitter.png"
                    className="w-6 h-6 mr-5"
                  />
                  tickitz.id
                </a>
              </li>
              <li className="list-none">
                <a
                  href=""
                  className="flex items-center text-[#4E4B66] text-[14px] tracking-[0.5px]"
                >
                  <img
                    src="/assets/imgs/home/feather/sp-yt.png"
                    alt="icon-yt.png"
                    className="w-6 h-6 mr-5"
                  />
                  Tickitz Cinema id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full flex justify-center mt-[75px]">
          <p className="text-[14px] font-normal tracking-[0.5px]">
            © 2020 Tickitz. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
