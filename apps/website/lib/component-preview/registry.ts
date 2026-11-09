export const examples = {
  button: { title: 'Button' },
  select: { title: 'Select' },
  avatar: { title: 'Avatar' },
} as const;
export type ExampleId = keyof typeof examples;
export const isExampleId = (id: string): id is ExampleId =>
  Object.hasOwn(examples, id);
export const themes = [
  'stratus',
  'solstice',
  'volt',
  'nebula',
  'canopy',
  'aster',
] as const;
export type PreviewTheme = (typeof themes)[number];
