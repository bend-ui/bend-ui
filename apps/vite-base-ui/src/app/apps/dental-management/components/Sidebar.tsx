import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div>
      <NavLink to="overview">Overview</NavLink>
      <NavLink to="patients">Patients</NavLink>
      <NavLink to="billing">Billing</NavLink>
    </div>
  );
};
