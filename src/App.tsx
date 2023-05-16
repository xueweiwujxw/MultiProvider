import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MultiProvider from './MultiProvider';

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
        <input onChange={e => setName(e.target.value)} value={name} />
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('wlanxww');

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
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
