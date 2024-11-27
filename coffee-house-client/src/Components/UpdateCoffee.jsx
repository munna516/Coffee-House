import React from "react";

const UpdateCoffee = () => {
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-[#f2ebd6] my-10 p-5 md:p-28">
        <h1 className="text-3xl font-bold text-center mb-5">Update Coffee :</h1>

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
                  placeholder="photo url"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-accent"
            value="Update Coffee"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
