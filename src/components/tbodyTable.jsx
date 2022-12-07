const TbodyTable = ({ data, handleRemove }) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          <th scope="row">{row.id}</th>
          <td>{row.first}</td>
          <td>{row.last}</td>
          <td>{row.handle}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(row.id)}
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TbodyTable;
