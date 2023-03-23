import { useRouter } from "next/router";
const ProductDetails = () => {
  const {
    query: { productId },
  } = useRouter();
  // console.log(productId);
  return (
    <div>
      <h2>Product-Details Page :{productId}</h2>
    </div>
  );
};

export default ProductDetails;
