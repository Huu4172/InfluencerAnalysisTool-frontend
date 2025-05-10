function Result({ data }) {
  console.log(data)
  if (data == "") return <p>No result yet.</p>;

  return (
    <div>
      <h4>Result</h4>
      {data === null ? (
        <h4>Failed to fetch data. Try a different URL</h4>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}

    </div>
  );
}

export default Result;
