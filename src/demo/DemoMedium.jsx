import useMediumScrape from '../hooks/useMediumScrape';

const DemoMediumScrape = () => {
  const { data, loading, error } = useMediumScrape('https://medium.com/miguate');

  return (
    <div>
      <h3>Medium Detail</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && !loading && !error && (
        <ul>
          {data.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DemoMediumScrape;
