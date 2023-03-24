import { useRouter } from "next/router";

const OrderDetails = () => {
  const {
    query: { orderId, productId },
  } = useRouter();

  return (
    <div>
      <h1>Product No: {productId}</h1>
      <h1>Order No: {orderId}</h1>
    </div>
  );
};

export default OrderDetails;
