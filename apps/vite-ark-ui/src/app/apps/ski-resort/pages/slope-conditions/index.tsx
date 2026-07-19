import { PageHeader } from '../../components/PageHeader';
import { PageWrapper } from '../../components/PageWrapper';

export const SlopeConditions = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeader.Title>Slope Conditions</PageHeader.Title>
        <PageHeader.Subtitle>
          Current conditions of all ski slopes at the resort.
        </PageHeader.Subtitle>
      </PageHeader>
      <div>Slope conditions content goes here...</div>
    </PageWrapper>
  );
};
