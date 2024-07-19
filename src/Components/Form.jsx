import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from 'js-cookies';

const Form = (onFormClick) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [propType,setPropType]=useState('')
  const [state,setState] = useState('') 
  const [city,setCity] = useState('')
  const [pincode,setPincode] = useState('')
  const [propertyLandmark,setPropertyLandmark] = useState('')  
  const [ExpectedPrice,setExpectedPrice] = useState('')  
  const[area, setArea] = useState(''); 
  const [email,setEmail]=useState('');
 
    // cosnt[area, setArea] = useState(''); 


   
 

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata=new FormData()
    formdata.append("PropertyType",propType)
    formdata.append("state",state)
    formdata.append("city",city)
    formdata.append( "pincode",pincode)
    formdata.append("propertyLandmark",propertyLandmark)
    formdata.append("ExpectedPrice",ExpectedPrice)
    formdata.append("area",area)
    formdata.append("email",email)
    formdata.append("image",selectedImage)
    const t=cookies.getItem('token')
    console.log(formdata)
    axios({
      url:"http://172.17.15.183:3000/protected/setproperty",
      method:"post",
      headers:{
        'content-type':'multipart/form-data',
        authorization: t,
      }
    })
     
  
    alert("Request has been send")
    navigate("/newnav");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb- text-center">Fill the Details</h1>
        <form method="post"
        enctype="multipart/form-data"
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <input
              type="email"
              placeholder="Enter the email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="area"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setArea(e.target.value)}
            />
          </div>
          <div>
            <select className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e)=> setPropType(e.target.value)}>
              <option value="land">Land</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the State"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setState(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the City"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setCity(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter the pin code"
              onChange={(e)=> setPincode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter the landmark"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setPropertyLandmark(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <input
              type="number"
              placeholder="Enter the price of land"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={(e)=> setExpectedPrice(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <input
              type="file"
              // accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"  
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div className="col-span-2">
            <button
              onSubmit={onFormClick}
              className="text-blue-700 hover:underline hover:text-gray-900 text-white bg-gray-700 p-3 rounded"
            >
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
