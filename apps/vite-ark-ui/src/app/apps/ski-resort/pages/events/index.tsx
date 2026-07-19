import { PageHeader } from '../../components/PageHeader';
import { PageWrapper } from '../../components/PageWrapper';

export const Events = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Events</PageHeader.Title>
        <PageHeader.Subtitle>
          List of events happening at the resort.
        </PageHeader.Subtitle>
        <PageHeader.Actions>
          <button>Add Event</button>
        </PageHeader.Actions>
      </PageHeader>
    </PageWrapper>
  );
};
