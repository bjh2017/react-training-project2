import Thead from "./thead";
import Tbody from "./tbody";

const Table = ({ data, handleRemove, handleEdit, columns }) => {
  return (
    <table className="table ">
      <Thead columns={columns} />
      <Tbody
        columns={columns}
        data={data}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </table>
  );
};

export default Table;
