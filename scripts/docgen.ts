import { blue, green, red } from 'colorette';
import { withDefaultConfig } from 'react-docgen-typescript';
import fs from 'fs-extra';
import path from 'path';

const customParser = withDefaultConfig();

const generateDeclarations = (path) => {
  console.log(green('Generating declarations'));
  const docs = customParser.parse(path);
  console.log(docs);
  return docs;
};

console.log(green('Welcome to Particles Docs Generator'));

const tailwindPackage = path.join(
  __dirname,
  '../packages/tailwind/src/index.ts'
);

console.log(blue(`Getting packages from ${tailwindPackage}`));

const PATHS = path.join(__dirname, '../packages/ui/src/lib/Ui.tsx');

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(
  path.join(__dirname, '../docs/.docgen/docgen.json'),
  generateDeclarations(PATHS)
);
