import { Command } from 'commander';
import prompts from 'prompts';

export const add = new Command()
  .name('add')
  .description('Add components to your project')
  .action(async () => {
    const response = await prompts([
      {
        type: 'autocomplete',
        name: 'component',
        message: 'Name of the component:',
        choices: [
          { title: 'Button', value: 'button' },
          { title: 'Tabs', value: 'tabs' },
          { title: 'Card', value: 'card' },
        ],
      },
      {
        type: 'toggle',
        name: 'storybook',
        message: 'Add Storybook files?',
        initial: true,
        active: 'yes',
        inactive: 'no',
      },
    ]);

    console.log(response);
  });
