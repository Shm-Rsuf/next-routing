import { useRouter } from "next/router";
const orderID = () => {
  const {
    query: { orderID },
  } = useRouter();
  return (
    <div>
      <h1>Order Details : {orderID}</h1>
    </div>
  );
};

export default orderID;
