import React from "react";
import { Card } from "./components/card";
import { ToastContainer } from "react-toastify";
import { Form } from "./components/form";
import { request } from "./config/request";

function App() {
  const [data, setData] = React.useState([]);

  const getData = () => {
    request.get("/todos").then((res) => {
      setData(res.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToastContainer />
      <Form reFetch={getData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {data.reverse().map((item) => (
          <Card
            reFetch={getData}
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
