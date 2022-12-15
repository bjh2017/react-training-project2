import { useEffect, useState } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";
import UserForm from "./userForm";
import Spinner from "./common/spinner";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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
            onClick={() => setSelectedItem(item)}
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

  const handleRemove = (item) => {
    const newData = users.filter((row) => row.id !== item.id);
    setUsers(newData);
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1>USERS</h1>
      </div>
      <div className="col-8">
        {users ? <Table columns={userColumns} data={users} /> : <Spinner />}
      </div>
      <div className="col-4">
        <UserForm data={users} setData={setUsers} selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Users;
