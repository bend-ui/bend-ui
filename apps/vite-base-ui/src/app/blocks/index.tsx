import { Link, Route, Routes } from 'react-router-dom';
import { Navbar01 } from './navbar-01';

export const Blocks = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Blocks</h1>
            <Link to="/">Go back home</Link>
            <Link to="navbar-01">Navbar 01</Link>
          </div>
        }
      />
      <Route path="navbar-01" element={<Navbar01 />} />
    </Routes>
  );
};
