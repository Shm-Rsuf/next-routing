const FrameworksDetails = ({ framework }) => {
  return (
    <div>
      <h2>
        {framework.id}-{framework.title}
      </h2>
      <p>{framework.core}</p>
    </div>
  );
};

export default FrameworksDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/frameworks/${params.frameId}`);
  const data = await res.json();

  return {
    props: {
      framework: data,
    },
  };
}
