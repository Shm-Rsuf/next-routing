import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Something went worong..!");
  return res.json();
};

const EidGifts = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:4000/eid-gifts",
    fetcher
  );

  const isLoading = !data && !error && isValidating;

  if (isLoading) return <h2>gift ashtese..</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <div>
      <h2>Eid Mubarak</h2>
      <p>You have received your gift</p>
      {data?.map((gift) => (
        <div key={gift.id}>
          <h3>{gift.title}</h3>
          <p>{gift.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default EidGifts;
