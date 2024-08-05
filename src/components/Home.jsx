import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import bgImage from "../assets/bg.jpg"; // Import the image
import Loader from "./Loader";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/progress");
    }, 500); // Adjust the delay as needed
  };

  return (
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})`, minHeight: "100vh" }}
    >
      {loading && <Loader />}
      <Snowfall />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 md:p-8">
        <div className="w-full text-center text-3xl md:text-7xl flex justify-center items-center mt-6 md:mt-10">
          <h1 className="font-gridlink">Arcade Facilitator Program 2024</h1>
        </div>
        <div className="mt-10 md:mt-40 flex items-center text-3xl md:text-6xl uppercase justify-center w-full h-32">
          <h1 className="font-klathy-blur">The Arcade</h1>
        </div>
        <div className="flex items-center text-lg md:text-2xl  justify-center w-full mt-4">
          <h1 className="font-roboto">
            <span className=" font-bold">Google</span> Cloud
          </h1>
        </div>
        <div className="mt-10 md:mt-40 flex items-center text-lg md:text-2xl uppercase justify-center w-full">
          <button
            onClick={handleClick}
            className="px-4 py-2 md:px-5 md:py-3 bg-[#2f0a53] hover:bg-[#2c0f28] duration-300 rounded-md text-[#d4caca] font-bold text-sm md:text-base"
          >
            Progress Board
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
