import { Route, Routes, Link } from 'react-router-dom';
import { SkiResort } from './apps/ski-resort';
import DentalManagement from './apps/dental-management';
import './index.css';
import '@fontsource-variable/inter/wght.css';
import { Blocks } from './blocks';

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
                <li>
                  <Link to="/dental-management/overview">
                    Dental management
                  </Link>
                </li>
                <li>
                  <Link to="/blocks">Blocks</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/ski-resort/*" element={<SkiResort />} />
        <Route path="/dental-management/*" element={<DentalManagement />} />
        <Route path="/blocks/*" element={<Blocks />} />
      </Routes>
    </div>
  );
}

export default App;
