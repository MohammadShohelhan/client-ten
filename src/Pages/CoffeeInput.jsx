import { data, useNavigate } from "react-router-dom";

const CoffeeInput = () => {


  const navigate = useNavigate()

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.files[0];

    const fromdata = new FormData();
    fromdata.append("image", photo);

    fetch(
      "https://api.imgbb.com/1/upload?key=eaeb928cbdd5bc534b11829e848ecb47",
      {
        method: "POST",
        body: fromdata,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data.data.display_url;
        const newCoffee = {
          name,
          chef,
          supplier,
          taste,
          category,
          details,
          photo: imageUrl,
        };
        console.log(imageUrl);
        fetch("http://localhost:4000/coffee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
  };

  return (
    <div>
      <button onClick={()=>navigate('/')} className="btn btn-warning m-12 ">Back to Home</button>
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold text-center mb-6">Add Coffee</h2>
        <form
          onSubmit={handleAddCoffee}
          className="card-body bg-gray-100 rounded p-6 shadow-md">
          {/* Form Row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                name="chef"
                type="text"
                placeholder="Enter Coffee Chef"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Form Row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                name="supplier"
                type="text"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                name="taste"
                type="text"
                placeholder="Enter Coffee Taste"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Form Row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                name="category"
                type="text"
                placeholder="Enter Coffee Category"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                name="details"
                type="text"
                placeholder="Enter Coffee Details"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="file"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#eec7c7d3] hover:bg-[#eebfbf]">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoffeeInput;
