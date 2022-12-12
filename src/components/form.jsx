import Button from "./common/button";
import Input from "./common/input";

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
      <Button label="Submit" />
    </form>
  );
};

export default Form;
