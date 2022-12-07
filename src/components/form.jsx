import Button from "./button";
import Input from "./input";

const Form = ({ values, handleInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="First Name"
        value={values.first}
        name="first"
        handleInput={handleInput}
      />
      <Input
        label="Last Name"
        value={values.last}
        name="last"
        handleInput={handleInput}
      />
      <Input
        label="Handle"
        value={values.handle}
        name="handle"
        handleInput={handleInput}
      />
      <Button label="Add" />
    </form>
  );
};

export default Form;
