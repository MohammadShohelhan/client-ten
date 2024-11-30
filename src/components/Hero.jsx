import Herobg from "../assets/icons/more/3.png";

const Hero = () => {
  return (
    <div
      className="h-[85vh] bg-cover bg-center grid grid-cols-2 "
      style={{ backgroundImage: `url(${Herobg})` }}>
      <div></div>
      <div className="flex flex-col justify-center space-y-5 w-[60%]">
        <h2 className="text-4xl font-medium text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="text-gray-400 font-medium w-[70%]">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn btn-warning text-orange-950 w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
