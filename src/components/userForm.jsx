import useForm from "./common/useForm";

const UserForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    id: null,
    name: "",
    username: "",
    email: "",
  };

  const { values, renderInput, handleSubmit, renderButton } = useForm(
    initialState,
    data,
    setData,
    selectedItem
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderInput("Fullname", values.name, "name")}
      {renderInput("Username", values.username, "username")}
      {renderInput("Email", values.email, "email")}
      {renderButton("Submit", null)}
    </form>
  );
};

export default UserForm;
