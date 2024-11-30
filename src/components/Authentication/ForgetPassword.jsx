import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { email, forgetPass } = useContext(AuthContext);
  const [emailValue, setEmailValue] = useState(email);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleForget = (e) => {
    e.preventDefault();
    forgetPass(emailValue)
      .then(() => {
        let timerInterval;
        Swal.fire({
          title: "Cheak your Mail!",
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
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Your Password?
        </h2>

        {/* {message && (
          <div className="text-green-500 text-center mb-4">{message}</div>
        )}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              value={emailValue}
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleForget}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Reset Password
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
