const ComparePrice = () => {
    return (
      <>
      <section className="py-5">
    <h2 className="text-center text-2xl font-semibold mb-6">
      Instantly Compare Prices on YOUSAVE
    </h2>
    <div className="disply-compaere xs:hidden">
      <div className="">
        <div className="flex justify-center flex-wrap">
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/home-depot-logo%201.png"
              alt=""
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/1485908_WAG_Signature_logo_RGB_750x208%201.png"
              alt=""
              className="w-2/2 mx-auto"
            />
          </div>
          <div className="w-1/6 p-2">
            <img src="https://yousave.ai/img/Kohl's%201.png" alt=""  className="w-1/2 mx-auto" />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/amazon-logo-transparent%201.png"
              alt=""
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="w-1/6 p-2">
            <img src="https://yousave.ai/img/Sears_Logo%201.png" alt=""  className="w-1/2 mx-auto" />
          </div>
          <div className="w-1/6 p-2">
            <img src="https://yousave.ai/img/images%201.png" alt=""  className="w-1/2 mx-auto"/>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center flex-wrap">
          <div className="w-1/6 p-2">
            <img src="https://yousave.ai/img/Macys_logo%201.png" alt=""  className="w-1/2 mx-auto" />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/JCPenney-Logo%201.png"
              alt=""
              className="mt-[-30%]"
            />
          </div>
          <div className="w-1/6 p-2">
            <img src="https://yousave.ai/img/EBay_logo%201.png" alt="" className="mt-[-30%]" />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/Walmart_logo%201.png"
              alt=""
              className="mt-[-20%]"
            />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/1280px-Lowes_Companies_Logo%201.png"
              alt=""
              className="mt-[-20%] w-1/2 mx-auto"
            />
          </div>
          <div className="w-1/6 p-2">
            <img
              src="https://yousave.ai/img/Best_Buy_logo_2018%201.png"
              alt=""
              className="mt-[-20%] w-1/2 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="md:hidden">
      <div className="row">
        <img
          src="https://yousave.ai/img/mobileLogos.webp"
          alt=""
          className="w-full h-[38vw]"
        />
      </div>
    </div>
    <div className="text-center text-lg mt-6">
      and <b className="italic">millions</b> more
    </div>
</section>
      </>
    )}

    export default ComparePrice;