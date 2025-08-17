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

    p.log.info(`You selected ${String(response)}`);
  });
