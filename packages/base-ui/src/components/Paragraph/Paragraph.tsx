import { Text, type TextProps } from '../Text';

export type ParagraphProps = Omit<TextProps, 'as'>;

export const Paragraph = (props: ParagraphProps) => <Text as="p" {...props} />;

Paragraph.displayName = 'Paragraph';
