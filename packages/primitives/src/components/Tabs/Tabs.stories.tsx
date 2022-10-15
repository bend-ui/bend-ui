import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as styles from './Tabs.styles';
import { Tabs } from './';

export default {
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List style={styles.tabsListStyles}>
      <Tabs.Tab value="tab-1">My account</Tabs.Tab>
      <Tabs.Tab value="tab-2">Billing</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="tab-1">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste nulla
        tempore tempora blanditiis beatae voluptatibus ipsam quisquam.
        Consectetur soluta laudantium recusandae ipsa repellat nisi, minima quae
        quasi provident minus!
      </p>
    </Tabs.Panel>
    <Tabs.Panel value="tab-2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi
        non culpa eum voluptatem nisi quas nihil temporibus repudiandae error
        cumque quis, facere, quod quibusdam mollitia aut. Animi, cupiditate
        beatae.
      </p>
    </Tabs.Panel>
  </Tabs>
);
