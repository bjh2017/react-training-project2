const Thead = (props) => {
  return (
    <thead>
      <tr>
        {props.columns.map((c, i) => (
          <th scope="col" key={i}>
            {c.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
