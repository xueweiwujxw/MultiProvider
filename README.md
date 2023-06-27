<h2 align="center">
  MultiProvider
</h2>
<p align="center">
  A component that allows chaining multiple providers as children.
</p>
<p align="center">
  <img src="https://github.com/xueweiwujxw/multi-provider/actions/workflows/test.yml/badge.svg" alt="Test">
  <img src="https://github.com/xueweiwujxw/multi-provider/actions/workflows/release.yml/badge.svg" alt="release">
  <a href="https://codecov.io/gh/xueweiwujxw/multi-provider">
    <img src="https://codecov.io/gh/xueweiwujxw/multi-provider/branch/master/graph/badge.svg?token=6UTGHWTWO1" alt="codecov">
  </a>
  <a href="https://www.npmjs.com/package/multi-provider-react">
    <img src="https://img.shields.io/npm/v/multi-provider-react" alt="npm">
  </a>
  <br/>
  <a href="https://www.npmjs.com/package/multi-provider-react">
    <img src="https://img.shields.io/npm/dt/multi-provider-react" alt="Downloads">
  </a>
  <img src="https://img.shields.io/github/repo-size/xueweiwujxw/multi-provider" alt="repo size">
  <a href="https://github.com/xueweiwujxw/multi-provider/issues">
    <img src="https://img.shields.io/github/issues/xueweiwujxw/multi-provider" alt="issues">
  </a>
  <a href="https://github.com/xueweiwujxw/multi-provider/pulls">
    <img src="https://img.shields.io/github/issues-pr/xueweiwujxw/multi-provider" alt="pr">
  </a>
  <a href="https://app.codacy.com/gh/xueweiwujxw/multi-provider/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade">
    <img src="https://app.codacy.com/project/badge/Grade/a45a343944be4c80bff012ff4300ddc8" alt="Codacy Badge">
  </a>
</p>
<hr/>

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
