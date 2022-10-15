import { Meta } from '@storybook/react';
import { Alert, useAlert } from '.';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

export const Base = () => {
  return <Alert>Alert content</Alert>;
};

export const Hook = () => {
  const alertProps = useAlert();
  return <div {...alertProps}>Alert content</div>;
};

export const Styled = () => {
  return (
    <Alert className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
      Alert content
    </Alert>
  );
};
