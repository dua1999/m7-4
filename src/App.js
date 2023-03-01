import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [cnt, setCnt] = useState(1)
 
  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<pages index={i} key={i} />)
  }

  return (
    <div className="App">
      <Input/> 
      {pages}
    <button onClick={() => setCnt(cnt + 1)}>Load More</button>
    </div>
  );
}

export default App;
