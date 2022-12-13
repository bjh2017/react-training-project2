import { useEffect, useState } from "react";
import Table from "./common/table";
import Form from "./form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const userColumns = [
    { path: "id", label: "ID" },
    {
      label: "Username",
      content: (item) => <Link to={`/users/${item.id}`}>{item.username}</Link>,
    },
    { path: "name", label: "Full Name" },
    { path: "email", label: "Email" },
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
          <button
            className="btn btn-danger me-2"
            onClick={() => handleRemove(item)}
          >
            delete
          </button>
          <Link to={`/users/${item.id}`} className="btn btn-primary">
            profile
          </Link>
        </>
      ),
    },
  ];

  const [values, setValues] = useState({
    id: null,
    name: "",
    username: "",
    email: "",
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
      toast.error("All Form Fields Are Required!!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (values.id) {
      // edit
      const newObj = { ...values };
      const newData = [...users];
      const index = users.findIndex((row) => row.id === values.id);
      newData[index] = newObj;
      setUsers(newData);
    } else {
      // add
      const newObj = { ...values };
      newObj.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newData = [...users, newObj];
      setUsers(newData);
    }
    setValues({ id: null, name: "", username: "", email: "" });
  };

  const handleEdit = (item) => {
    const element = users.find((row) => row.id === item.id);
    setValues({
      id: element.id,
      name: element.name,
      username: element.username,
      email: element.email,
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
