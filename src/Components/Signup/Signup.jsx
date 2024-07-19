import React from "react";

export default function Signup({ onSigninClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-300 max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-2"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create a new account
        </h5>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-1 group">
            {" "}
            <label htmlFor="first_name" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="Fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="Lname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="aadhar" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="aadhar"
            id="aadhar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Aadhar No."
            required
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-1 group">
            {" "}
            <label htmlFor="first_name" className="sr-only">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="State"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="sr-only">
              District
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="District"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-1 group">
            {" "}
            <label htmlFor="first_name" className="sr-only">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Pincode"
              required
            />
          </div>
          <div>
            <label htmlFor="phone_no" className="sr-only">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_no"
              id="Phno"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_password" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Confirm Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-black bg-gray-500 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSigninClick}
            className="text-blue-700 hover:underline hover:text-red-700 dark:text-blue-500"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
