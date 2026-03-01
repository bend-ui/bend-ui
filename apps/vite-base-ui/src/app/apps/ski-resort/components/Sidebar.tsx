import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div>
      <div>Alpine Peak</div>
      <nav>
        <NavLink to="slope-conditions">Slope Conditions</NavLink>
        <NavLink to="lift-status">Lift Status</NavLink>
        <NavLink to="events">Events</NavLink>
        <NavLink to="clients">Clients</NavLink>
        <NavLink to="incidents">Incidents</NavLink>
      </nav>
    </div>
  );
};
