import React from "react";
import { toast } from "react-toastify";
import { request } from "../config/request";

export const Card = ({ title, description, id, reFetch }) => {
  const [loading, setLoading] = React.useState(false);

  const deleteTodo = () => {
    setLoading(true);
    request
      .delete(`/todos/${id}`)
      .then((res) => {
        toast.success("Deleted successfully");
        reFetch();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const editTodo = () => {
    const newTitle = prompt("Edit title", title);
    const newDes = prompt("Edit description", description);
    request
      .patch(`/todos/${id}`, { title: newTitle, description: newDes })
      .then((res) => {
        toast.success("Edited successfully");
        reFetch();
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={editTodo}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600 transition-colors"
      >
        Edit
      </button>
      <button
        onClick={deleteTodo}
        className={`${
          loading ? "bg-gray-400" : "bg-red-500"
        } text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Delete"}
      </button>
    </div>
  );
};
