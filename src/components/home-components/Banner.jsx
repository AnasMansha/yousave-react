const HomeBanner = () => {
    return (
      <>
      <section className="banner">
          <img
              className="bannerImage hidden md:block w-full" screens
              src="https://yousave.ai/img/432.svg"
              alt=""
          />
          <img
              className="bannerImage block md:hidden" screens
              src="https://yousave.ai/img/background-mobile.webp"
              alt=""
              style={{ width: '100%', height: '38vw' }}
          />
      </section>
      </>
    )}

    export default HomeBanner;