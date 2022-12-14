import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import ProductForm from "./productForm";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Mark", brand: "Otto", qty: 10, price: "10$", rank: 3 },
    { id: 2, title: "Jack", brand: "Morio", qty: 4, price: "10$", rank: 3 },
    { id: 3, title: "Zelicka", brand: "Toni", qty: 9, price: "10$", rank: 2 },
  ]);

  const productColumns = [
    { path: "id", label: "ID" },
    {
      label: "Title",
      content: (item) => <Link to={`/products/${item.id}`}>{item.title}</Link>,
    },
    { path: "brand", label: "Brand" },
    { path: "qty", label: "Quantity" },
    { path: "price", label: "Price" },
    { path: "rank", label: "Rank" },
    {
      label: "Show",
      content: (item) => (
        <>
          <button className="btn btn-success" onClick={() => showProduct(item)}>
            Show Product
          </button>
        </>
      ),
    },
  ];

  const showProduct = (item) => {
    alert(JSON.stringify(item));
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1>PRODUCTS</h1>
      </div>
      <div className="col-8">
        <Table data={products} columns={productColumns} />
      </div>
      <div className="col-4">
        <ProductForm data={products} setData={setProducts} />
      </div>
    </div>
  );
};

export default Products;
