function Result({ data }) {
  console.log(`current data is ${data}`)
  if (data == "") return <p>No result yet.</p>;

  return (
    <div>
      <h4>Result</h4>
      {data ==null ? (
        <h1>Failed to fetch data. Try a different URL</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}

    </div>
  );
}

export default Result;
