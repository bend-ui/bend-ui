import { PageLayout } from '../components/PageLayout';

export const Overview = () => {
  return (
    <PageLayout>
      <PageLayout.Title>Dental Management Overview</PageLayout.Title>
      <PageLayout.Content>
        <p>
          Welcome to the Dental Management System. This overview page provides a
          summary of the key features and functionalities available in the
          application.
        </p>
        <ul>
          <li>
            <strong>Patient Management:</strong> Easily manage patient records,
            appointments, and treatment plans.
          </li>
          <li>
            <strong>Billing and Invoicing:</strong> Streamline your billing
            process with integrated invoicing and payment tracking.
          </li>
          <li>
            <strong>Reporting and Analytics:</strong> Gain insights into your
            practice with comprehensive reporting tools.
          </li>
        </ul>
        <p>
          Use the sidebar to navigate through different sections of the
          application and manage your dental practice efficiently.
        </p>
      </PageLayout.Content>
    </PageLayout>
  );
};
