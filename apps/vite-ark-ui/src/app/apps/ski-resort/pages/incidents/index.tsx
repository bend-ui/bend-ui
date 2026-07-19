import { PageHeader } from '../../components/PageHeader';
import { PageWrapper } from '../../components/PageWrapper';

export const Incidents = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Incidents</PageHeader.Title>
        <PageHeader.Subtitle>
          List of incidents reported at the resort.
        </PageHeader.Subtitle>
        <PageHeader.Actions>
          <button>Add Incident</button>
        </PageHeader.Actions>
      </PageHeader>
    </PageWrapper>
  );
};
