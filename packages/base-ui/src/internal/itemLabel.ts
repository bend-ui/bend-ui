import type { ReactNode } from 'react';

const isRecord = (item: unknown): item is Record<string, unknown> =>
  typeof item === 'object' && item !== null;

/**
 * Resolves the visible label of a collection item the way Base UI does:
 * an explicit `itemToStringLabel`, then `item.label`, then `item.value`,
 * then the item itself.
 */
export function itemLabel<Item>(
  item: Item,
  itemToStringLabel?: ((item: Item) => string) | null,
): ReactNode {
  if (itemToStringLabel) return itemToStringLabel(item);
  if (isRecord(item)) {
    if (item.label != null) return item.label as ReactNode;
    if ('value' in item) return String(item.value);
  }
  return String(item);
}

/** A stable React key for a collection item. */
export function itemKey<Item>(item: Item): string {
  if (isRecord(item) && 'value' in item) return String(item.value);
  return String(item);
}
