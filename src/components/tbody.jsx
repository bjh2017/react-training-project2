import _ from "lodash";

const Tbody = ({ data, handleRemove, handleEdit, columns }) => {
  // const pickPropertyValue = (obj, property) => {
  //   let pickedValue;
  //   Object.keys(obj).forEach((k) => {
  //     if (k === property) pickedValue = obj[k];
  //   });
  //   return pickedValue;
  // };

  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((c) => (
            <td>{_.get(row, c.path) || c.content(row.id)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;