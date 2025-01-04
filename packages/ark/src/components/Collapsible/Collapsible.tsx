'use client';
import { Collapsible as ArkCollapsible } from '@ark-ui/react';

export default Object.assign(ArkCollapsible.Root, {
  Root: ArkCollapsible.Root,
  Content: ArkCollapsible.Content,
  Trigger: ArkCollapsible.Trigger,
});

export { CollapsibleContext as Context } from '@ark-ui/react';
