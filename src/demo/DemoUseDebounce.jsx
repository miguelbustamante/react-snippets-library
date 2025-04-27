import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const DemoUseDebounce = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <h3>useDebounce Demo</h3>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search (debounced)"
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
};

export default DemoUseDebounce;