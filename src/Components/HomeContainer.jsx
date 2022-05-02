import React from "react";
import { heroData } from "../utils/data";
import Delivery from "./img/delivery.png";
import HeroBg from "./img/heroBg.png";
import I1 from "./img/i1.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className=" flex flex-1 flex-col items-start justify-center py-2 gap-6 ">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full ">
          <p className="text-base text-orange-500 font-semibold ">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain bg-white "
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem]  font-bold space tracking-wide text-headingColor ">
          The Fastest Delivery in
          <span className=" text-orange-600 text-[3rem] lg:text-[5rem] ">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          eveniet sed magni at, alias quas odit recusandae maiores tempore,
          tempora harum! Minima amet iste facere dicta aliquid, adipisci
          repellat accusantium?
        </p>

        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative ">
        <img
          src={HeroBg}
          className=" ml-auto w-full lg:w-auto h-420 lg:h-650"
          alt=""
        />

        <div className="w-full h-full flex absolute top-0 left-0 lg:px-32 py-4 gap-2 flex-wrap items-center justify-center ">
          {heroData && heroData.map(n=> (
          <div key={n.id} className="  lg:w-190  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl  flex flex-col items-center justify-center drop-shadow-lg ">
            <img src={n.imageSrc} alt="" className="w-20 lg:w-40 -mt-10 lg:-mt-20" />
            <p className=" text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4 ">
              
              {n.name}
            </p>
            <p className=" text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 ">

              {n.decp}
            </p>
            <p className="text-sm text-headingColor font-semibold ">
              
              <span className="text-red-600">₹</span> {n.price}
            </p>
          </div>))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
