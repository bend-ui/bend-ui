import React from 'react';
import { Meta } from '@storybook/react';

export default { title: 'Components/FormControl' } as Meta;

export const Base = () => {
  return (
    <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="emailField">Email address</label>
      <input type="text" name="" id="emailField" />
      <div>Help text</div>
      <div>Error message</div>
    </fieldset>
  );
};
