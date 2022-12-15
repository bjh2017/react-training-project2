import useForm from "./common/useForm";

const ProductForm = ({ data, setData }) => {
  const initialState = {
    id: null,
    title: "",
    brand: "",
    qty: "",
    price: "",
    rank: "",
  };

  const { values, renderInput, handleSubmit, renderButton } = useForm(
    initialState,
    data,
    setData
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderInput("Title", values.title, "title")}
      {renderInput("Brand", values.brand, "brand")}
      {renderInput("Qty", values.qty, "qty")}
      {renderInput("Price", values.price, "price")}
      {renderInput("Score", values.rank, "rank")}
      {renderButton("Submit", null)}
    </form>
  );
};

export default ProductForm;
