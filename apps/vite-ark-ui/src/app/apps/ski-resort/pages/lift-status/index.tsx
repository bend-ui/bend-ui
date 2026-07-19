import { PageHeader } from '../../components/PageHeader';
import { PageWrapper } from '../../components/PageWrapper';

export const LiftStatus = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Lift Status</PageHeader.Title>
        <PageHeader.Subtitle>
          Current status of all ski lifts at the resort.
        </PageHeader.Subtitle>
        <PageHeader.Actions>
          <button>Refresh Status</button>
        </PageHeader.Actions>
      </PageHeader>
      <div>Lift status content goes here...</div>
    </PageWrapper>
  );
};
