import btnImg from "../assets/icons/more/6.png";

import { Link } from "react-router-dom";

const MiniTitle = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-y-10 py-12">
      <h4 className="text-2xl">--- Sip & Savor ---</h4>
      <h2 className=" text-red-950 text-5xl">Our Popular Products</h2>
      <Link className="btn bg-[#cfaa44fd] overflow-hidden" to={"/coffee"}>
        <button className="flex justify-center items-center text-white">
          <span>Add Coffee</span> <img className="w-12 h-12 -mt-4" src={btnImg} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default MiniTitle;
