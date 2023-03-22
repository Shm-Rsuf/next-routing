import { useRouter } from "next/router";
const ProductDetails = () => {
  const {
    query: { productID },
  } = useRouter();
  return (
    <div>
      <h1>Product Details : {productID}</h1>
    </div>
  );
};

export default ProductDetails;
