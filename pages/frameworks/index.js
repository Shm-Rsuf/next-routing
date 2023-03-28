const Frameworks = ({ frameworks }) => {
  return (
    <div>
      <h2>List of Frameworks</h2>
      {frameworks.map((framework) => (
        <div key={framework.id}>
          <h3>
            {framework.id}-{framework.title}
          </h3>
          <p>{framework.core}</p>
        </div>
      ))}
    </div>
  );
};

export default Frameworks;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/frameworks");
  const data = await res.json();

  return {
    props: {
      frameworks: data,
    },
  };
}
