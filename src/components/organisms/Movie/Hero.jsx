function Hero() {
  return (
    <>
      <section
        className="hero w-full h-[462px] px-6 md:px-[130px] text-white flex flex-col justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../assets/imgs/log-in/background-login.png)",
        }}
      >
        <h3 className="font-bold text-[18px] tracking-[0.75px] leading-[34px] w-[638px]">
          LIST MOVIE OF THE WEEK
        </h3>
        <h1 className="font-medium text-[48px] tracking-[1px] leading-[70px] w-[638px]">
          Experience the Magic of Cinema: Book Your Tickets Today
        </h1>
        <div className="absolute top-[440px] left-[900px] flex gap-[5px]">
          <div className="w-[43px] h-[5px] bg-blue-700 rounded-[20px]"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
