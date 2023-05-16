import React from 'react';
import './style/Child.css';
import { CountContext, NameContext } from './tools/Context';

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

export default Child;
