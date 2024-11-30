import React, { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Users = () => {
  const navigate =useNavigate()
  const loaderData = useLoaderData();
  const {setIdForEdit}=useContext(AuthContext)
  const [users, setUsers] = useState(loaderData);

  const handleDeleteUser = (id) => {
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
        fetch(`http://localhost:4000/allusers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            } else {
              Swal.fire("Error!", "Failed to delete the user.", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "An error occurred during deletion.", "error");
          });
      }
    });
  };

  const handleUpdateUserData = async (id) => {
    setIdForEdit(id)
    navigate('/userUpdate')
    
    // fetch(`http://localhost:4000/allusers/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...userToUpdate }),
    // })
    //   .then((res) => res.json())
    //   .then((data) =>{
    //     console.log(data)
    //     const userToUpdate = users.find((user) => user._id === id);
    //     console.log('updatedata ki ashe ki',userToUpdate)
    //   })
  };

  return (
    <div>
      <h2>Here are all the users</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.gender || "N/A"}</td>
                <td>{user.status || "Active"}</td>
                <td>
                  <div className="flex space-x-2">
                    {/* Update Button */}
                    <button
                      onClick={() => handleUpdateUserData(user._id)}
                      className="border p-2 rounded bg-blue-500 text-white">
                      <CiEdit />
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="border p-2 rounded bg-red-500 text-white">
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
