import React, { useContext } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { regesterUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateAccoun = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const gender = form.gender.value;
    const password = form.password.value;
    console.log(email, password);
    regesterUser(email, password).then((res) => {
      console.log("crate a accout", res);
      const registerInfo = { email, password, name,gender };
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });
      navigate("/");
    });
  };

  const hanndleGoogle = () => {
    googleLogin().then(() => navigate("/"));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <form onSubmit={handleCreateAccoun} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full px-3 py-2 border rounded">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
            <Link to="/forgetpass" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
            <Link
              to="/login"
              // onClick={() => navigate("/login")}
              className="label-text-alt link link-hover">
              already have you account?
            </Link>
          </label>

          {Error && <p className="text-red-500">{Error?.message}</p>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <button
        onClick={hanndleGoogle}
        className="btn py-2 bg-warning text-black hover:text-white">
        Google
      </button>
    </div>
  );
};

export default Register;
