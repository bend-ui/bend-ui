import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Clients } from './pages/clients';
import { Events } from './pages/events';
import { LiftStatus } from './pages/lift-status';
import { SlopeConditions } from './pages/slope-conditions';
import { Incidents } from './pages/incidents';

export const SkiResort = () => {
  return (
    <Layout>
      <Routes>
        <Route path="clients" element={<Clients />} />
        <Route path="slope-conditions" element={<SlopeConditions />} />
        <Route path="lift-status" element={<LiftStatus />} />
        <Route path="events" element={<Events />} />
        <Route path="incidents" element={<Incidents />} />
      </Routes>
    </Layout>
  );
};
