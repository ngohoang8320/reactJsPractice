import { useState } from 'react';
import './App.css';
import Content from './lessons/mountandunmount/Content';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
      >Toggle</button>

      {show && <Content />}
    </>
  )
}

export default App;
