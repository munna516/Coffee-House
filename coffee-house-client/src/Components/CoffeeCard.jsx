import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (_id) => {
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
        fetch(
          `https://coffee-store-server-eight-peach.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remain = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remain);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="p-3" src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between p-5 ml-5 w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
