import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`https://coffee-store-server-eight-peach.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "coffee updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <>
      <div className="bg-[#f2ebd6] p-5 md:p-28">
        <h1 className="text-3xl font-bold text-center mb-5">
          Update Coffee : {name}
        </h1>

        <form onSubmit={handleUpdateCoffee}>
          {/* First Row Name and chef */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="coffee name"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Chef</span>
                </div>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="chef"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* second Row supplier and taste */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Supplier</span>
                </div>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="supplier name"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Taste</span>
                </div>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="coffeee taste"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Third Row Category and Details */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="category name"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Details</span>
                </div>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="coffeee details"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>
          {/* Third Row Category and Details */}
          <div className="mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="photo url"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-neutral"
            value="Update Coffee"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
