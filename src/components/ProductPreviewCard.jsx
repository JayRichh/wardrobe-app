import AddProduct from "./AddProduct";

const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="w-full p-4 m-2 rounded flex flex-col text-gray-800 bg-gradient-to-b from-greenLight to-greenLight-500 text-center h-full">
      <AddProduct onAddProduct={addProduct} />
      <img
        src={product.imageUrl}
        alt={product.name}
        className="aspect-square object-cover"
      />
      <h2 className="pb-2 px-1 text-lg font-bold">{product.name}</h2>
      <p className="mb-2 px-1 h-20 line-clamp-4">{product.desciption}</p>
    </div>
  );
};

export default ProductPreviewCard;
