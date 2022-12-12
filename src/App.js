import "./App.css";
import { useState } from "react";
import Table from "./components/common/table";
import Form from "./components/form";

function App() {
  const [data, setData] = useState([
    { id: 1, first: "Mark", last: "Otto", handle: "admin" },
    { id: 2, first: "Jack", last: "Morio", handle: "superviser" },
    { id: 3, first: "Zelicka", last: "Toni", handle: "writer" },
  ]);

  const columns = [
    { path: "id", label: "ID" },
    { path: "first", label: "First Name" },
    { path: "last", label: "Last Name" },
    { path: "handle", label: "Permissions" },
    {
      label: "Actions",
      content: (id) => (
        <>
          <button
            className="btn btn-warning me-2"
            onClick={() => handleEdit(id)}
          >
            edit
          </button>
          <button className="btn btn-danger" onClick={() => handleRemove(id)}>
            delete
          </button>
        </>
      ),
    },
  ];

  const [products, setProducts] = useState([
    { id: 1, title: "Mark", brand: "Otto", qty: 10, price: "10$" },
    { id: 2, title: "Jack", brand: "Morio", qty: 4, price: "10$" },
    { id: 3, title: "Zelicka", brand: "Toni", qty: 9, price: "10$" },
  ]);

  const productColumns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "brand", label: "Brand" },
    { path: "qty", label: "Quantity" },
    { path: "price", label: "Price" },
    {
      label: "Show",
      content: (item) => (
        <>
          <button className="btn btn-success" onClick={() => showProduct(item)}>
            Show Product
          </button>
        </>
      ),
    },
  ];

  const showProduct = (item) => {
    alert(item.toString());
  };

  const [values, setValues] = useState({
    id: null,
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
    // // validation
    // let empty = false;
    // Object.keys(values).forEach((key) => {
    //   if (values[key].length < 1) empty = true;
    // });
    // // ["first", "last", "handle"]
    // if (empty) {
    //   alert("All Form Fields Are Required!!!");
    //   return;
    // }

    if (values.id) {
      // edit
      const newObj = { ...values };
      const newData = [...data];
      const index = data.findIndex((row) => row.id === values.id);
      newData[index] = newObj;
      setData(newData);
      setValues({ id: null, first: "", last: "", handle: "" });
    } else {
      // add
      const newObj = { ...values };
      newObj.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newData = [...data, newObj];
      setData(newData);
      setValues({ id: null, first: "", last: "", handle: "" });
    }
  };

  const handleEdit = (id) => {
    const element = data.find((row) => row.id === id);
    setValues({
      id: element.id,
      first: element.first,
      last: element.last,
      handle: element.handle,
    });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <Table columns={columns} data={data} />
        </div>
        <div className="col-4">
          <Form
            values={values}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table data={products} columns={productColumns} />
        </div>
      </div>
    </div>
  );
}

export default App;
