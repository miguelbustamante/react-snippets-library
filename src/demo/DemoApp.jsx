import { useState } from 'react';
import DemoUseFetch from './DemoUseFetch';
import DemoUseDebounce from './DemoUseDebounce';
import DemoUseLocalStorage from './DemoUseLocalStorage';
import DemoModal from './DemoModal';
import DemoInfiniteScroll from './DemoInfiniteScroll';
import '../styles/DemoApp.css';

const DemoApp = () => {
  const [activeDemo, setActiveDemo] = useState('useFetch');

  const demos = {
    useFetch: <DemoUseFetch />,
    useDebounce: <DemoUseDebounce />,
    useLocalStorage: <DemoUseLocalStorage />,
    modal: <DemoModal />,
    infiniteScroll: <DemoInfiniteScroll />,
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Demos</h2>
        <ul>
          <li>
            <button onClick={() => setActiveDemo('useFetch')}>useFetch</button>
          </li>
          <li>
            <button onClick={() => setActiveDemo('useDebounce')}>useDebounce</button>
          </li>
          <li>
            <button onClick={() => setActiveDemo('useLocalStorage')}>useLocalStorage</button>
          </li>
          <li>
            <button onClick={() => setActiveDemo('modal')}>Modal</button>
          </li>
          <li>
            <button onClick={() => setActiveDemo('infiniteScroll')}>InfiniteScroll</button>
          </li>
        </ul>
      </div>
      <div className="content">{demos[activeDemo]}</div>
    </div>
  );
};

export default DemoApp;