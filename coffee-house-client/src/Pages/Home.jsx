import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../Components/CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl my-10 text-gray-400 font-bold text-center">
        Coffee House : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-3 mb-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
