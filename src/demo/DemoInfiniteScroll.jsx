import InfiniteScroll from '../components/InfiniteScroll';

const DemoInfiniteScroll = () => {
  const fetchMockData = (page) =>
    Promise.resolve(
      Array(5)
        .fill()
        .map((_, i) => `Item ${page * 5 + i}`)
    );

  return (
    <div>
      <h3>InfiniteScroll Demo</h3>
      <InfiniteScroll fetchData={fetchMockData} renderItem={(item) => <div>{item}</div>} />
    </div>
  );
};

export default DemoInfiniteScroll;