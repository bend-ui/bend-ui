import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';

export const projectAnnotations = [a11yAddonAnnotations];

export function setProjectAnnotations(annotations: any[]) {
  projectAnnotations.push(...annotations);
}
