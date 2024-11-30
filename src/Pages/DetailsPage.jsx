import React from "react";
import Coffee from "../components/Coffee";
import { Link, useLoaderData } from "react-router-dom";
import { toggle } from './../../node_modules/sweetalert2/src/utils/dom/domUtils';

const DetailsPage = () => {
  const data =useLoaderData()
  const {photo,chef,taste,_id,suplier,category,details}=data
  console.log(data);
  return (
    <div className="">
      <Link  to='/'><button className="btn bg-orange-800">Back to Home</button></Link>
  
      <div className="card card-side bg-base-100 shadow-xl flex justify-between items-center p-10 max-w-[70vw] mx-auto">
      <figure>
        <img src={photo} className="w-[280px] h-[280px]" alt="Movie" />
      </figure>

      <div>
        <div><h2 className="card-title text-2xl text-orange-800">Name:{name}</h2></div>
        <div> 
          <p>Chef:{chef}</p>
          <p>Suplier:{suplier}</p>
          <p>Taste:{taste}</p>
          <p>Catagory:{category}</p>
          <p>Details:{details}</p>
        </div>
    
        
      </div>
      <div className="card-actions  flex-col">
        <Link to={`/coffees/${_id}`}><button  className="btn btn-primary">Detail</button></Link>
        <Link to={`/updatecoffee/${_id}`}>
          {" "}
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          delete
        </button>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
