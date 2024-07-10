const HomeBanner = () => {
  return (
    <>
      <section className="">
        <img
          className="hidden md:block w-full"
          screens
          src="https://yousave.ai/img/432.svg"
          alt=""
        />
        <img
          className="block md:hidden w-full h-[38vw]"
          screens
          src="https://yousave.ai/img/background-mobile.webp"
          alt=""
        />
      </section>
    </>
  );
};

export default HomeBanner;
