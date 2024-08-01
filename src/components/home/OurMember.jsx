import LoginButton from "components/common/LoginButton";
import React, { useEffect, useState } from "react";
import { getGlobalSavings } from "utils/apis/saving";

const formatNumber = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + " billion";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + " million";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  } else {
    return number.toString();
  }
};

function TopCard() {
  return (
    <div className="p-4 rounded-xl border-[1px] border-[#E6E6E6] w-full h-[180px] lg:h-[130px]">
      <p className="text-sm lg:text-md text-start">
        "YouSave has become my go-to platform for me every time I shop. It has
        saved me over 100$ with 2 extra clicks on my last purchase"
      </p>
      <p className="mt-2 text-md md:text-lg text-start">
        <li>Devon R.</li>
      </p>
    </div>
  );
}

function MidCard({ globalSavings, mobileVersion = false }) {
  return (
    <div
      className={`p-4 rounded-xl border-[1px] border-[#E6E6E6] w-full h-[180px] md:transform md:-translate-y-20 ${
        mobileVersion ? "block md:hidden" : "hidden md:block"
      }`}
    >
      <p className="text-center text-sm md:text-lg lg:text-xl font-medium">
        YouSave’s users have saved a whopping{" "}
      </p>
      <p className="text-4xl md:text-3xl lg:text-4xl font-bold pt-4">
        ${globalSavings || "0.00"}
      </p>
      <p className="mt-2 text-xs md:text-[14px] lg:text-sm font-medium">
        and counting
      </p>
    </div>
  );
}

function BottomCard() {
  return (
    <div className="p-4 rounded-xl border-[1px] border-[#E6E6E6] w-full h-[180px] lg:h-[130px]">
      <p className="text-sm lg:text-md text-start">
        "I always make my purchases through YouSave, it's the easiest and
        fastest way to maximize savings when shopping for anything"
      </p>
      <p className="mt-2 text-md md:text-lg text-start">
        <li>Vanessa Watson</li>
      </p>
    </div>
  );
}

function Cards({ globalSavings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-10 lg:p-20 lg:pb-10">
      <MidCard globalSavings={globalSavings} mobileVersion />
      <TopCard />
      <MidCard globalSavings={globalSavings} />
      <BottomCard />
    </div>
  );
}

const OurMember = () => {
  const [globalSavings, setGlobalSavings] = useState(null);

  useEffect(() => {
    const fetchGlobalSavings = async () => {
      const totalSavings = await getGlobalSavings();
      setGlobalSavings(formatNumber(Math.floor(totalSavings)));
    };

    if (!globalSavings) fetchGlobalSavings();
  }, [globalSavings]);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white text-center mt-24">
      <h1 className="text-2xl font-bold mb-16">
        Our members <span className="text-red-500">❤️</span> saving money with
        YouSave.
      </h1>

      <Cards globalSavings={globalSavings} />

      <LoginButton className="mt-6 md:my-6" />
    </div>
  );
};

export default OurMember;
