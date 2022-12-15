import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Input from "./input";

const useForm = (initialState, data, setData, selectedItem) => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (selectedItem) setValues(selectedItem);
  }, [selectedItem]);

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
      const newData = [...data];
      const index = data.findIndex((row) => row.id === values.id);
      newData[index] = newObj;
      setData(newData);
    } else {
      // add
      const newObj = { ...values };
      newObj.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newData = [...data, newObj];
      setData(newData);
    }
    setValues(initialState);
  };

  const renderInput = (label, value, name) => {
    return (
      <Input
        label={label}
        value={value}
        name={name}
        handleInput={handleInput}
      />
    );
  };

  const renderSelect = (label, value, name) => {
    return (
      <Input
        label={label}
        value={value}
        name={name}
        handleInput={handleInput}
      />
    );
  };

  const renderButton = (label, backgroundColor) => {
    const classes = backgroundColor
      ? `btn ${backgroundColor}`
      : "btn btn-primary";
    return (
      <button type="submit" className={classes}>
        {label}
      </button>
    );
  };

  return {
    renderInput,
    handleSubmit,
    renderButton,
    values,
    renderSelect,
  };
};

export default useForm;
