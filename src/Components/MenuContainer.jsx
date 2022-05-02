import React, { useState,useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("beef");
  const[{foodItems},dispatch] = useStateValue();
  useEffect(() => {}, [filter])
  

  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex gap-8 mt-6 py-6 overflow-x-scroll scrollbar-none items-center justify-start lg:justify-center ">
          {categories &&
            categories.map((category) => (
              <motion.div
              whileTap={{scale:0.75}}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName
                    ? "bg-orange-500"
                    : "bg-orange-100"
                }  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all hover:bg-orange-500`}
              onClick={()=>setFilter(category.urlParamName)}>
                <div
                  className={`w-10 h-10 shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-orange-100"
                      : "bg-orange-500"
                  }  rounded-full group-hover:bg-orange-100 flex items-center justify-center`}
                >
                  <IoFastFood className= {`${
                  filter === category.urlParamName
                    ? "text-orange-500"
                    : "text-orange-100"
                } group-hover:text-orange-500`} />
                </div>
                <p className={` ${
                    filter === category.urlParamName
                      ? "text-orange-100 "
                      : "text-orange-500"
                  } text-sm group-hover:text-orange-100`}>
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full  ">
            <RowContainer flag={false} data={foodItems?.filter(n=>n.category==filter)} />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
