import { createContext } from '../../utils';
import type {
  AccordionContextValue,
  AccordionItemContextValue,
} from './Accordion.types';

export const [AccordionProvider, useAccordionContext] =
  createContext<AccordionContextValue>('Accordion');

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContextValue>('AccordionItem');
