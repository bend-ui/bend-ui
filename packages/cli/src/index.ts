#!/usr/bin/env node

import { program } from 'commander';
import { add } from './commands/add';

program
  .version('1.0.0')
  .description('Generate React Components CLI')
  .addCommand(add)
  .action(() => {
    // const componentPath = path.join(__dirname, componentName);
    // // Check if the component directory already exists
    // if (fs.existsSync(componentPath)) {
    //   console.error(`Component '${componentName}' already exists.`);
    //   process.exit(1);
    // }
    // // Create the component directory
    // fs.mkdirSync(componentPath);
    // // Create the component file
    // const componentContent = `import React from 'react';
    // const ${componentName} = () => {
    //   return (
    //     <div>
    //       {/* Your ${componentName} component */}
    //     </div>
    //   );
    // };
    // export default ${componentName};
    // `;
    // fs.writeFileSync(
    //   path.join(componentPath, `${componentName}.tsx`),
    //   componentContent,
    // );
    // console.log(`Component '${componentName}' created successfully.`);
  });

program.parse();
