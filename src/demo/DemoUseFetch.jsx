import useFetch from '../hooks/useFetch';

const DemoUseFetch = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <h3>useFetch Demo</h3>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data?.slice(0, 5), null, 2)}</pre>}
    </div>
  );
};

export default DemoUseFetch;