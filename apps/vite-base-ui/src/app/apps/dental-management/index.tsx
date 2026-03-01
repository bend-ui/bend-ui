import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Patients } from './pages/Patients';
import { Billing } from './pages/Billing';

const DentalManagement = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Layout>
  );
};

export default DentalManagement;
