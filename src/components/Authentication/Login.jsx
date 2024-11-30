import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { googleLogin, loginUser, setEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   

    loginUser(email, password);
    navigate("/");
  };
  // const handleGoogle = () => {
  //   console.log('jhellodksdjfs');
     
  //     .then(() => navigate("/"))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            ref={emailRef}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link
              onClick={() => console.log(setEmail(emailRef.current.value))}
              to="/forgetpass"
              className="label-text-alt link link-hover">
              Forgot password?
            </Link>
            <a
              href="#"
              onClick={() => navigate("/register")}
              className="label-text-alt link link-hover">
              are you new Create account?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <button
        onClick={()=>googleLogin()}
        className="btn py-2 bg-warning text-black hover:text-white">
        Google Login
      </button>
      {/* <button
        onClick={handletwitter}
        className="btn py-2 bg-warning text-black hover:text-white">
        X
      </button> */}
    </div>
  );
};

export default Login;
