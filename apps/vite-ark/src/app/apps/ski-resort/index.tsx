import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Clients } from './pages/clients';
import { Events } from './pages/events';
import { LiftStatus } from './pages/lift-status';
import { SlopeConditions } from './pages/slope-conditions';
import { Incidents } from './pages/incidents';
import { Overview } from './pages/overview';

export const SkiResort = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="clients" element={<Clients />} />
        <Route path="slope-conditions" element={<SlopeConditions />} />
        <Route path="lift-status" element={<LiftStatus />} />
        <Route path="events" element={<Events />} />
        <Route path="incidents" element={<Incidents />} />
      </Routes>
    </Layout>
  );
};
