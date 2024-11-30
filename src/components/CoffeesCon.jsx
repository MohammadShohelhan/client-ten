import { useState } from "react";
import Coffee from "./Coffee";
import MiniTitle from "./MiniTitle";
import ImageOne from '../assets/icons/more/1.png'

const CoffeesCon = ({ data }) => {
 const [allCoffees,setAllCoffees] =  useState(data)

  return (
    <div className="min-h-[70vh] mb-10 mx-auto w-[100%] z-10 relative" style={{backgroundImage:`url(${ImageOne})`}}>
      {/* <img className='absolute mt-12 z-2' src={ImageOne}  alt="" /> */}
      <div className="flex justify-center items-center  w-[83%] mx-auto ">
        <MiniTitle className='z-99'></MiniTitle>
      </div>
      <div className="grid md:grid-cols-2 px-[10vh] gap-10 w-[83%] mx-auto">
        {allCoffees.map((coffee) => (
          <Coffee allCoffees={allCoffees} setAllCoffees={setAllCoffees} data={data} key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default CoffeesCon;
