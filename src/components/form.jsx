import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { request } from "../config/request";

export const Form = ({ reFetch }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    request.post("/todos", data).then((res) => {
      toast.success("Success");
      reFetch();
      reset();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <input
          className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:border-blue-500"
          {...register("title", { required: true })}
          type="text"
          placeholder="Enter title"
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </div>
      <div className="mb-4">
        <input
          className="border border-gray-300 p-4 w-full rounded-md focus:outline-none focus:border-blue-500"
          {...register("description", { required: true })}
          type="text"
          placeholder="Enter description"
        />
        {errors.description && (
          <span className="text-red-500">Description is required</span>
        )}
      </div>
      <button className="bg-blue-500 text-white p-4 rounded-md w-full hover:bg-blue-600 transition-colors">
        Send
      </button>
    </form>
  );
};
