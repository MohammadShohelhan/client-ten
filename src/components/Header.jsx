import { Link } from "react-router-dom";
import HeaderBg from "../assets/icons/more/15.jpg";
import Logo from "../assets/icons/more/logo1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import demoImage  from '../assets/icons/404/404.gif'
const Header = () => {
  const { logout, value, userImage } = useContext(AuthContext);

  // console.log(value?.photoURL)
  const handleLogOut = () => {
    logout()
      .then(() => {
        let timerInterval;
        Swal.fire({
          title: "Log out Succfully",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{ backgroundImage: `url(${HeaderBg})` }}
      className="flex justify-between items-center">
      <div>
        {value ? (
          <img
            className="w-14 h-14 rounded-full object-cover object-center"
            src={ userImage }
          />
        ) : (
          ""
        )}
      </div>
      <div className="py-4 flex items-center gap-2 ">
        <img className="w-12 h-12" src={Logo} alt="" />
        <h2 className="text-2xl font-medium text-white">Espresso Emporium</h2>
      </div>
      <div>
        {value ? (
          <button onClick={handleLogOut} className="btn btn-warning">
            LogOut
          </button>
        ) : (
          <div className="flex gap-5">
            <Link to="/login">
              <button className="btn btn-warning">Login</button>
            </Link>

            <Link to="/register">
              <button className="btn btn-warning">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
