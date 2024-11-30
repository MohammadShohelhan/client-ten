import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Coffee = ({ coffee, allCoffees, setAllCoffees }) => {
  const { value } = useContext(AuthContext);
  const { photo, name, chef, taste, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = allCoffees.filter(
                (coffee) => coffee._id !== id
              );
              setAllCoffees(remaining);
              console.log("delete conformed");
            }

            console.log(id);
          });
      }
    });
  };

  return (
    <div className="card rounded-none card-side  shadow-xl flex justify-around items-center p-10 bg-[#F5F4F1]">
      <figure>
        <img src={photo} className=" object-center object-cover" alt="Movie" />
      </figure>

      <div className="space-y-3">
        <p>
          <strong>Name :</strong>
          {name}
        </p>
        <p>
          <strong>Chef :</strong>
          {chef}
        </p>
        <p>
          <strong>Price :</strong>
          {taste}
        </p>
      </div>

      <div>
        {value ? (
          <div className="card-actions  flex-col">
            <div className="border p-3 rounded-lg bg-yellow-500">
              {" "}
              <Link to={`/coffees/${_id}`}>
                <FaEye className="text-2xl text-white" />
              </Link>
            </div>

            <div className="border p-3 rounded-lg bg-black">
              {" "}
              <Link to={`/updatecoffee/${_id}`}>
                <CiEdit className="text-2xl text-white" />
              </Link>
            </div>

            <div
              onClick={() => handleDelete(_id)}
              className="border p-3 rounded-lg bg-red-500">
              <MdDelete className="text-2xl text-white" />
            </div>
          </div>
        ) : (
          <div className="card-actions  flex-col">
            <Link>
              <button className="btn btn-primary">Order</button>
            </Link>
            <Link>
              <button className="btn btn-primary">Love</button>
            </Link>
            <button className="btn btn-primary">Review</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coffee;
