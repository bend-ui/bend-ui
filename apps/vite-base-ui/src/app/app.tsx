import { Route, Routes, Link } from 'react-router-dom';
import { SkiResort } from './apps/ski-resort';

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div role="navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/ski-resort">Ski resort</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/ski-resort" element={<SkiResort />} />
      </Routes>
    </div>
  );
}

export default App;
