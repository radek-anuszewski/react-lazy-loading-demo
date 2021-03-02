import {useState, lazy, Suspense} from "react";
const Lazy = lazy(() => import('./Lazy'));
// import Lazy from './Lazy';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <div style={{padding: 50}}>
      <button onClick={() => setLoad(true)}>
        Load component with styles and moment.js
      </button>
      {
        load && (
          <Suspense fallback={<p>Loading...</p>}>
            <Lazy />
          </Suspense>
        )
      }
    </div>
  );
}

export default App;
