function Result({ data }) {
  if (!data) return <p>No result yet.</p>;

  return (
    <div>
      <h4>Result</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Result;
