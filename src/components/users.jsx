import { useState } from "react";
import Table from "./common/table";
import Form from "./form";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, first: "Mark", last: "Otto", handle: "admin" },
    { id: 2, first: "Jack", last: "Morio", handle: "superviser" },
    { id: 3, first: "Zelicka", last: "Toni", handle: "writer" },
  ]);

  const userColumns = [
    { path: "id", label: "ID" },
    { path: "first", label: "First Name" },
    { path: "last", label: "Last Name" },
    { path: "handle", label: "Permissions" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-warning me-2"
            onClick={() => handleEdit(item)}
          >
            edit
          </button>
          <button className="btn btn-danger" onClick={() => handleRemove(item)}>
            delete
          </button>
        </>
      ),
    },
  ];

  const [values, setValues] = useState({
    id: null,
    first: "",
    last: "",
    handle: "",
  });

  const handleRemove = (item) => {
    const newData = users.filter((row) => row.id !== item.id);
    setUsers(newData);
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
    let empty = false;
    Object.keys(values).forEach((key) => {
      if (key !== "id" && values[key].length < 1) empty = true;
    });
    // ["first", "last", "handle"]
    if (empty) {
      alert("All Form Fields Are Required!!!");
      return;
    }

    if (values.id) {
      // edit
      const newObj = { ...values };
      const newData = [...users];
      const index = users.findIndex((row) => row.id === values.id);
      newData[index] = newObj;
      setUsers(newData);
      setValues({ id: null, first: "", last: "", handle: "" });
    } else {
      // add
      const newObj = { ...values };
      newObj.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newData = [...users, newObj];
      setUsers(newData);
      setValues({ id: null, first: "", last: "", handle: "" });
    }
  };

  const handleEdit = (item) => {
    const element = users.find((row) => row.id === item.id);
    setValues({
      id: element.id,
      first: element.first,
      last: element.last,
      handle: element.handle,
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1>USERS</h1>
      </div>
      <div className="col-8">
        <Table columns={userColumns} data={users} />
      </div>
      <div className="col-4">
        <Form
          values={values}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Users;
