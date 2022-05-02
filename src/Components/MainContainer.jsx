import React, { useState, useEffect } from "react";
import HomeContainer from "./HomeContainer";
import Hero from "./img/heroBg.png";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);

  return (
    <div className="flex w-full flex-col items-center justify-center ">
      <HomeContainer />
      <section className="w-full my-6 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
            Our fresh & healthy IceCreams
          </p>
          <div className="hidden md:flex gap-3 items-center ">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all  duration-100 hover:shadow-lg flex items-center justify-center "
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-base text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all  duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
            >
              <MdChevronRight
                className="text-base text-white"
                onClick={() => setScrollValue(200)}
              />
            </motion.div>
          </div>
        </div>

        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems} />
      </section>
      <MenuContainer/>
    </div>
  );
};

export default MainContainer;
