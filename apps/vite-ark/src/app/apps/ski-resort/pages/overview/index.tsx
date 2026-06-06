import { PageWrapper } from '../../components/PageWrapper';
import { PageHeader } from '../../components/PageHeader';

export const Overview = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Overview</PageHeader.Title>
        <PageHeader.Subtitle>
          Summary of the ski resort's current status.
        </PageHeader.Subtitle>
      </PageHeader>
    </PageWrapper>
  );
};
