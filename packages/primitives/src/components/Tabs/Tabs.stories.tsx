import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

type Story = ComponentStory<typeof Tabs>;

export const Base: Story = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value="account">My account</Tabs.Tab>
      <Tabs.Tab value="billing">Billing</Tabs.Tab>
      <Tabs.Tab value="profile">Profile</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="account">
      <h2>My account</h2>
      <p>
        Account Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        iste nulla tempore tempora blanditiis beatae voluptatibus ipsam
        quisquam. Consectetur soluta laudantium recusandae ipsa repellat nisi,
        minima quae quasi provident minus!
      </p>
    </Tabs.Panel>
    <Tabs.Panel value="billing">
      <h2>Billing details</h2>
      <p>
        Billing Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        eligendi non culpa eum voluptatem nisi quas nihil temporibus repudiandae
        error cumque quis, facere, quod quibusdam mollitia aut. Animi,
        cupiditate beatae.
      </p>
    </Tabs.Panel>
    <Tabs.Panel value="profile">
      <h2>Profile</h2>
      <p>
        Profile Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        eligendi non culpa eum voluptatem nisi quas nihil temporibus repudiandae
        error cumque quis, facere, quod quibusdam mollitia aut. Animi,
        cupiditate beatae.
      </p>
    </Tabs.Panel>
  </Tabs>
);

Base.args = {
  defaultValue: 'account',
};
