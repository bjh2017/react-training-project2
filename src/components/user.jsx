import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./common/spinner";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const InfoCard = () => {
    return (
      <div className="card" style={{ width: "24rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">fullname: {user.name}</li>
          <li className="list-group-item">username: {user.username}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">website: {user.website}</li>
          <li className="list-group-item">phone: {user.phone}</li>
        </ul>
        <div className="card-footer">Card footer</div>
      </div>
    );
  };

  return (
    <>
      <h1>User with id = {id}</h1>
      {user ? <InfoCard /> : <Spinner />}
    </>
  );
};

export default User;
