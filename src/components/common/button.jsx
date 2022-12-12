const Button = ({ label, backgroundColor }) => {
  const classes = backgroundColor
    ? `btn ${backgroundColor}`
    : "btn btn-primary";
  return (
    <button type="submit" className={classes}>
      {label}
    </button>
  );
};

export default Button;
