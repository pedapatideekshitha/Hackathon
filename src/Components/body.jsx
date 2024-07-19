import React, { useState } from "react";
import image from "../assets/ab.jpg";
import Cookies from "js-cookies";
import axios from "axios";

const Body = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    const formdata = {
      city: city,
      maxPrice: price,
      PropertyType: type,
    };
    const t = Cookies.getItem("token");
    axios({
      url: "http://172.17.15.183:3000/protected/getProperties",
      method: "post",
      headers: {
        authorization: t,
      },
      data: formdata,
    })
      .then((res) => setData(res.data.post))
      .catch((err) => console.log(err));
    console.log(formdata);
  };
  return (
    <div>
      <div
        className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 opacity-75">
          To reach their assets.
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-8 opacity-75">
          Let's find an assest that's perfect for you.
        </p>

        <div className="w-full max-w-4xl px-4">
          <div className="bg-white bg-opacity-60 p-4 rounded-lg shadow-md">
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enter City"
                className="flex-1 p-3 border border-gray-200 rounded-md placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter the price"
                className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPrice(e.target.value)}
              />
              <select
                className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Type of Property</option>
                <option value="land">Lands</option>
                <option value="house">Houses</option>
                <option value="apartment">Apartment</option>
              </select>
              <button
                type="submit"
                className="p-3 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-500"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-30 gap-y-10 place-items-stretch h-56 ">
        {data.map((item) => (
          <div className="bg-gray-300 border w-60 p-6 border-gray-100 text-amber-950 rounded text-center">
            <button onClick={() => handlePress(item)}>
              <img src={item.Siteimage} /> <p></p>
              <p>Property Type :{item.PropertyType}</p>{" "}
              <p>Property city :{item.city}</p>
            </button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
