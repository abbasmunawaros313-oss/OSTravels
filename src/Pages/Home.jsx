import { useState } from "react";
import {
  MdLocalHotel,
  MdFlight,
  MdOutlineSecurity,
  MdOutlineArticle,
} from "react-icons/md";

import Hotelform from "../SildeComponents/Hotelform";
import InsurenceForm from "../SildeComponents/InsurenceForm";
import Flights from "../SildeComponents/Flights";
import VisaForm from "../SildeComponents/VisaFrorm";

const mainNavItems = [
  { name: "Hotels", icon: <MdLocalHotel /> },
  { name: "Insurance", icon: <MdOutlineSecurity /> },
  { name: "Visa", icon: <MdOutlineArticle /> },
  { name: "Flights", icon: <MdFlight /> },
];

function Home() {
  const [activeMainTab, setActiveMainTab] = useState("Hotels");

  const renderSearchForm = () => {
    switch (activeMainTab) {
      case "Hotels":
        return <Hotelform />;
      case "Flights":
        return <Flights />;
      case "Visa":
        return <VisaForm />;
      case "Insurance":
        return <InsurenceForm />;
      default:
        return <Hotelform />;
    }
  };

  return (
    <section className="w-full">
      {/* --- Background Banner --- */}
      <div
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/maldives-island-beach-tropical-landscape-600nw-2547983501.jpg')",
        }}
      />

      {/* --- Foreground Section --- */}
      <div className="flex flex-col items-center w-full px-4 -mt-48 md:-mt-64">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 text-center "
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          SEE THE WORLD FOR LESS WITH OS TRAVELS
        </h2>

        {/* --- Mini Navbar --- */}
     <div className="w-full max-w-4xl mb-[-25px] relative z-10">
  <div
    className="
      animated-border
      relative flex justify-center items-center gap-x-2
      shadow-lg rounded-xl px-2 py-2
      mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide
    "
  >
    <div className="relative z-10 flex justify-center items-center gap-x-2">
      {mainNavItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveMainTab(item.name)}
          className={`flex items-center  gap-1  sm:gap-2 px-3 py-1 cursor-pointer sm:px-4 sm:py-2 font-bold text-xs sm:text-sm transition-all rounded-md
            ${
              activeMainTab === item.name
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600"
            }`}
        >
          <span className="text-base  sm:text-lg">{item.icon}</span>
          {item.name}
        </button>
      ))}
    </div>
  </div>
</div>


        {/* --- Main Form Box --- */}
        <div
          className="
            bg-white rounded-2xl shadow-2xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%]
            p-5 md:p-6 -mt-3 relative z-0
          "
        >
          {renderSearchForm()}
        </div>
      </div>
    </section>
  );
}

export default Home;
