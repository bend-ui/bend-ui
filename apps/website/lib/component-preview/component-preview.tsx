import { Preview } from './preview';
import { isExampleId } from './registry';
import { sources } from './source-registry';

export function ComponentPreview({ example }: { example: string }) {
  if (!isExampleId(example))
    throw new Error(`Unknown component preview: ${example}`);
  return <Preview id={example} source={sources[example]} />;
}
