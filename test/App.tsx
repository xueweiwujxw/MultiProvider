import * as React from 'react';

import MultiProvider from '../src/index';

const CountContext = React.createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => {
    //
  },
});

const NameContext = React.createContext<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}>({
  name: 'wlanxww',
  setName: () => {
    //
  },
});

const Child = () => {
  const { setCount } = React.useContext(CountContext);
  const { name, setName } = React.useContext(NameContext);

  return (
    <div className='card'>
      <button
        onClick={() => {
          setCount(prev => prev + 1);
        }}
      >
        click here to add count
      </button>
      <span> </span>
      <button onClick={() => setCount(0)}>click here to clear count</button>
      <span> </span>
      <div className='input-button'>
        <input
          aria-label='name-input'
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('wlanxww');

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>Hello {name}</div>
      <div className='card'>count is {count}</div>
      <MultiProvider
        providers={[
          <CountContext.Provider
            key='count'
            value={{
              count: count,
              setCount: setCount,
            }}
          />,
          <NameContext.Provider
            key='name'
            value={{
              name: name,
              setName: setName,
            }}
          />,
        ]}
      >
        <Child />
      </MultiProvider>
    </>
  );
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
