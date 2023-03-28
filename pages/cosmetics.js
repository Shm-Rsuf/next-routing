const Consmetics = ({ cosmetics }) => {
  return (
    <div className="container mx-auto text-center">
      <h1>List of Cosmetics</h1>
      {cosmetics.map((cosmetic) => (
        <div key={cosmetic.id}>
          <h3>
            {cosmetic.id}-{cosmetic.title}={cosmetic.price}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Consmetics;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/cosmetics");
  const data = await res.json();

  return {
    props: {
      cosmetics: data,
    },
    revalidate: 10,
  };
}
