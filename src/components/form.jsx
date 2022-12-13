import Button from "./common/button";
import Input from "./common/input";

const Form = ({ values, handleInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Fullname"
        value={values.name}
        name="name"
        handleInput={handleInput}
      />
      <Input
        label="Username"
        value={values.username}
        name="username"
        handleInput={handleInput}
      />
      <Input
        label="Email"
        value={values.email}
        name="email"
        handleInput={handleInput}
        type="emial"
      />
      <Button label="Submit" />
    </form>
  );
};

export default Form;
