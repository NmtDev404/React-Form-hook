import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-md mx-auto m-4 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? "border-red-500" : ""
              }`}
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "Input field required",
                minLength: { value: 3 },
                maxLength: { value: 10 },
              })}
            />
            {errors.firstName && (
              <p className="pt-1 font-medium text-red-500">
                {errors.firstName.message}
              </p>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <p className="text-red-500 font-medium">
                Minimum length is 3 characters
              </p>
            )}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <p className="text-red-500 font-medium">
                Maximum length is 10 characters
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? "border-red-500" : ""
              }`}
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Input field required",
                minLength: { value: 3 },
                maxLength: { value: 10 },
              })}
            />
            {errors.lastName && (
              <p className="pt-1 font-medium text-red-500">
                {errors.lastName.message}
              </p>
            )}
            {errors.lastName && errors.lastName.type === "minLength" && (
              <p className="text-red-500 font-medium">
                Minimum length is 3 characters
              </p>
            )}
            {errors.lastName && errors.lastName.type === "maxLength" && (
              <p className="text-red-500 font-medium">
                Maximum length is 10 characters
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="text"
              placeholder="Your Email"
              {...register("email", {
                required: "Email field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />

            <p className=" mt-2  text-red-500 font-medium ">
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Input field required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/,
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
      },
              })}
            />

            <p className="text-red-500 font-medium">
              {errors.password?.message}
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm_password"
            >
              Confirm password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirm_password ? "border-red-500" : ""
              }`}
              id="confirm_password"
              type="password"
              placeholder="Confirm password"
              {...register("confirm_password", {
                required: "Input field required",
                validate: (data) => {
                  if (watch("password") !== data) {
                    return "Password do not match";
                  }
                },
              })}
            />

            <p className="text-red-500 font-medium">
              {errors.confirm_password?.message}
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
