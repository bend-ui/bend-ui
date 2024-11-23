#!/usr/bin/env node

import * as p from '@clack/prompts';
import { Command } from 'commander';
import boxen from 'boxen';
import { AddCommand } from './commands/add';

export async function run() {
  p.intro('Welcome to Particles CLI 🎨');

  const program = new Command()
    .name('particles')
    .version('1.0.0')
    .description('Generate React Components CLI');

  program.addCommand(AddCommand);

  p.log.step(
    boxen('Generate React Components CLI', {
      title: 'Particles CLI',
      borderColor: 'green',
      padding: 1,
    }),
  );

  const spinner = p.spinner();

  spinner.start('Installing packages...');

  await new Promise((resolve) => setTimeout(resolve, 2000));

  spinner.stop('Installed packages');

  const projectType = await p.select({
    message: 'What do you want to do?',
    options: [
      { value: 'add', label: 'Add component' },
      { value: 'remove', label: 'Remove component' },
    ],
  });

  p.log.info(`You selected ${projectType}`);

  if (projectType === 'add') {
    AddCommand.parse();
  } else if (projectType === 'remove') {
    p.log.info('Remove command not implemented yet');
  }

  // p.outro('Particles CLI is ready to use 🎉');

  program.parse();
}

run().catch((error) => {
  console.error(error);
  p.outro('An error occurred while running the command.');
  process.exit(1);
});
