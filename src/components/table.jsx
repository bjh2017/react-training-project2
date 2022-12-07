import HeadTable from "./headTable";
import TbodyTable from "./tbodyTable";

const Table = ({ data, handleRemove }) => {
  return (
    <table className="table ">
      <HeadTable />
      <TbodyTable data={data} handleRemove={handleRemove} />
    </table>
  );
};

export default Table;
