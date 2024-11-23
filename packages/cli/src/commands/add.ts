import path from 'path';
import fs from 'fs';
import { Command } from 'commander';
import * as p from '@clack/prompts';

export const AddCommand = new Command()
  .name('add')
  .description('Add components to your project')
  .action(async () => {
    const response = await p.select({
      message: 'What do you want to do?',
      options: [
        { value: 'new', label: 'Create new component' },
        { value: 'template', label: 'Component from template' },
      ],
    });

    p.log.info(`You selected ${response}`);
    //       title: 'Create new component',
    //       value: 'new',
    //     },
    //     {
    //       title: 'Component from template',
    //       value: 'template',
    //     },
    //   ],
    //   initial: 'new',
    // },
    // {
    //   type: (prev) => (prev === 'template' ? 'autocomplete' : null),
    //   name: 'component',
    //   message: 'Name of the component:',
    //   choices: [
    //     { title: 'Button', value: 'button' },
    //     { title: 'Tabs', value: 'tabs' },
    //     { title: 'Card', value: 'card' },
    //   ],
    // },
    //   {
    //     type: 'text',
    //     name: 'componentName',
    //     message: 'Name of the component:',
    //   },
    //   {
    //     type: 'toggle',
    //     name: 'storybook',
    //     message: 'Add Storybook files?',
    //     initial: true,
    //     active: 'yes',
    //     inactive: 'no',
    //   },

    // const componentPath = path.join(
    //   process.cwd(),
    //   `src/components/${response.componentName}`,
    // );

    // // Check if the component directory already exists
    // if (fs.existsSync(componentPath)) {
    //   console.error(`Component '${response.componentName}' already exists.`);
    //   process.exit(1);
    // }

    // // Create the component directory
    // fs.mkdirSync(componentPath);

    // const templatePath = path.join(__dirname, '../templates/component.tsx');
    // const componentContent = fs.readFileSync(templatePath, 'utf-8');
    // const finalComponentContent = componentContent.replace(
    //   /{componentName}/g,
    //   response.componentName,
    // );

    // fs.writeFileSync(
    //   path.join(componentPath, `${response.componentName}.tsx`),
    //   finalComponentContent,
    // );

    // console.log(`Component '${response.componentName}' created successfully.`);
  });
