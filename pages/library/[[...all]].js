import { useRouter } from "next/router";
const Documentation = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Documentation..</h1>
    </div>
  );
};

export default Documentation;
