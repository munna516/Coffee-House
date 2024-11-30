import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Coffee is added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="bg-[#f2ebd6] my-10 p-5 md:p-28">
        <h1 className="text-3xl font-bold text-center mb-5">
          Add a New Coffee
        </h1>

        <form onSubmit={handleSubmit}>
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
                  <span className="label-text">Chef Name</span>
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
            value="Add Coffee"
          />
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
