import { Route, Routes, Link } from 'react-router-dom';
import { DashboardPage } from './dashboard';
import './index.css';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/dashboard">Click here for dashboard.</Link>
            </div>
          }
        />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
