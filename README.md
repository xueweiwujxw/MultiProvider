![Test](https://github.com/xueweiwujxw/multi-provider/actions/workflows/test.yml/badge.svg)
![release](https://github.com/xueweiwujxw/multi-provider/actions/workflows/release.yml/badge.svg)
[![codecov](https://codecov.io/gh/xueweiwujxw/multi-provider/branch/master/graph/badge.svg?token=6UTGHWTWO1)](https://codecov.io/gh/xueweiwujxw/multi-provider)
![license](https://img.shields.io/badge/license-Apache--2.0-green)
[![npm version](https://badge.fury.io/js/multi-provider-react.svg)](https://www.npmjs.com/package/multi-provider-react)
[![Downloads](https://img.shields.io/npm/dt/multi-provider-react)](https://www.npmjs.com/package/multi-provider-react)
![repo size](https://img.shields.io/github/repo-size/xueweiwujxw/multi-provider)
[![issues](https://img.shields.io/github/issues/xueweiwujxw/multi-provider)](https://github.com/xueweiwujxw/multi-provider/issues)
[![pr](https://img.shields.io/github/issues-pr/xueweiwujxw/multi-provider)](https://github.com/xueweiwujxw/multi-provider/pulls)

## MultiProvider

A component that allows chaining multiple providers as children.

---

### Install

```sheel
yarn add multi-provider-react
```

### Usage

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import './App.css';
import MultiProvider from 'multi-provider-react';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Contributors

<a href="https://github.com/xueweiwujxw/multi-provider/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=xueweiwujxw/multi-provider" />
</a>
