const Input = ({ label, name, value, handleInput }) => {
  return (
    <div className="mb-3">
      <label htmlFor="first" className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
