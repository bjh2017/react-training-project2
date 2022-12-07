import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Table from "./components/table";
import Form from "./components/form";

function App() {
  const [data, setData] = useState([
    { id: 1, first: "Mark", last: "Otto", handle: "admin" },
    { id: 2, first: "Jack", last: "Morio", handle: "superviser" },
    { id: 3, first: "Zelicka", last: "Toni", handle: "writer" },
  ]);

  const [values, setValues] = useState({
    first: "",
    last: "",
    handle: "",
  });

  const handleRemove = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValues = { ...values };
    newValues[name] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    let empty = false;
    Object.keys(values).forEach((key) => {
      if (values[key].length < 1) empty = true;
    });
    // ["first", "last", "handle"]
    if (empty) {
      alert("All Form Fields Are Required!!!");
      return;
    }

    const newObj = { ...values };
    newObj.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newData = [...data, newObj];
    // newData.push(newObj);
    setData(newData);
    setValues({ first: "", last: "", handle: "" });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <Table data={data} handleRemove={handleRemove} />
        </div>
        <div className="col-4">
          <Form
            values={values}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
