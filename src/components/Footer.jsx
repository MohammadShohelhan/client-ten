import bg from "../assets/icons/more/8.png";

const Footer = () => {
  return (
    <div
      className="relative py-8 h-[5vh] text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <h2>Copyright Espresso Emporium! All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
