import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserInfoTable = () => {
  // const loderData = useLoaderData()
  const navigate =useNavigate()
  const { idForEdit } = useContext(AuthContext);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    // console.log(email, password, idForEdit);

    const userToUpdate = { email, password, name };

    console.log(userToUpdate)
    fetch(`http://localhost:4000/allusers/${idForEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userToUpdate }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
    
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your update has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/allusers')
        
        // const userToUpdate = loderData.find((user) => user._id === idForEdit);
        // console.log("updatedata ki ashe ki", userToUpdate);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>

        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
};

export default UserInfoTable;
