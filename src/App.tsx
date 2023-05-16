import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './style/App.css';
import Child from './Child';
import MultiProvider from './Modules/MultiProvider';
import { CountContext, NameContext } from './tools/Context';

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
