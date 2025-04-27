import useLocalStorage from '../hooks/useLocalStorage';

const DemoUseLocalStorage = () => {
  const [name, setName] = useLocalStorage('demoName', 'Guest');

  return (
    <div>
      <h3>useLocalStorage Demo</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (saved to localStorage)"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default DemoUseLocalStorage;