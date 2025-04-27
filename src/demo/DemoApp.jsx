import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';
import Modal from '../components/Modal';
import InfiniteScroll from '../components/InfiniteScroll';
import './DemoApp.css';

const DemoApp = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [name, setName] = useLocalStorage('demoName', 'Guest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  const fetchMockData = (page) =>
    Promise.resolve(
      Array(5)
        .fill()
        .map((_, i) => `Item ${page * 5 + i}`)
    );

  return (
    <div className="demo-container">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search (debounced)"
      />
      <p>Debounced: {debouncedSearch}</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (saved to localStorage)"
      />
      <p>Hello, {name}!</p>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Sample Modal</h2>
        <p>This is a reusable modal!</p>
      </Modal>

      <h3>API Data:</h3>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data?.slice(0, 5), null, 2)}</pre>}

      <h3>Infinite Scroll:</h3>
      <InfiniteScroll fetchData={fetchMockData} renderItem={(item) => <div>{item}</div>} />
    </div>
  );
};

export default DemoApp;