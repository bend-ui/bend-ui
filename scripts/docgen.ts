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

console.log(green('Welcome to Bend UI Docs Generator'));

const baseUiPackage = path.join(__dirname, '../packages/base-ui/src/index.ts');

console.log(blue(`Getting packages from ${baseUiPackage}`));

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(
  path.join(__dirname, '../docs/.docgen/docgen.json'),
  generateDeclarations(baseUiPackage),
);
