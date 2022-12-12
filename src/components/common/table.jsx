import Thead from "./thead";
import Tbody from "./tbody";

const Table = ({ data, columns }) => {
  return (
    <table className="table ">
      <Thead columns={columns} />
      <Tbody columns={columns} data={data} />
    </table>
  );
};

export default Table;
