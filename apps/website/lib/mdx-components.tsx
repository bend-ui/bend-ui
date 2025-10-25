import type { MDXComponents } from 'mdx/types';
import {
  Heading,
  Text,
  Box,
  Stack,
  Code,
  Tabs,
  Accordion,
  particles,
} from '@particles/ark';

/**
 * Custom MDX components using @particles/ark instead of fumadocs-ui defaults
 * This provides a consistent look with your design system
 */
export const mdxComponents: MDXComponents = {
  // Headings
  h1: (props) => (
    <Heading
      as="h1"
      fontSize="4xl"
      fontWeight="bold"
      marginBottom="6"
      marginTop="8"
      lineHeight="tight"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      as="h2"
      fontSize="3xl"
      fontWeight="bold"
      marginBottom="4"
      marginTop="8"
      lineHeight="tight"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      fontSize="2xl"
      fontWeight="semibold"
      marginBottom="3"
      marginTop="6"
      lineHeight="snug"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      as="h4"
      fontSize="xl"
      fontWeight="semibold"
      marginBottom="3"
      marginTop="6"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      as="h5"
      fontSize="lg"
      fontWeight="semibold"
      marginBottom="2"
      marginTop="4"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      as="h6"
      fontSize="md"
      fontWeight="semibold"
      marginBottom="2"
      marginTop="4"
      {...props}
    />
  ),

  // Paragraphs and text
  p: (props) => (
    <Text
      fontSize="md"
      lineHeight="relaxed"
      marginBottom="4"
      color="gray.700"
      {...props}
    />
  ),

  // Lists
  // ul: ({ ref, ...props }) => (
  //   <particles.ul
  //     marginLeft="6"
  //     marginBottom="4"
  //     listStyleType="disc"
  //     {...props}
  //   />
  // ),
  // ol: ({ ref, ...props }) => (
  //   <particles.ol
  //     marginLeft="6"
  //     marginBottom="4"
  //     listStyleType="decimal"
  //     {...props}
  //   />
  // ),
  // li: ({ ref, ...props }) => (
  //   <particles.li
  //     fontSize="md"
  //     lineHeight="relaxed"
  //     marginBottom="2"
  //     {...props}
  //   />
  // ),

  // Code
  // code: (props) => {
  //   // Inline code
  //   if (!props.className) {
  //     return (
  //       <Code
  //         fontSize="sm"
  //         padding="1"
  //         bg="gray.100"
  //         borderRadius="sm"
  //         {...props}
  //       />
  //     );
  //   }
  //   // Code blocks are handled by pre
  //   return <code {...props} />;
  // },
  // pre: ({ ref, ...props }) => (
  //   <particles.pre
  //     bg="gray.900"
  //     color="gray.100"
  //     padding="4"
  //     borderRadius="lg"
  //     overflow="auto"
  //     marginBottom="6"
  //     fontSize="sm"
  //     lineHeight="relaxed"
  //     {...props}
  //   />
  // ),

  // Blockquotes
  // blockquote: ({ ref, ...props }) => (
  //   <particles.blockquote
  //     borderLeft="4px"
  //     borderColor="blue.500"
  //     paddingLeft="4"
  //     marginY="6"
  //     fontStyle="italic"
  //     color="gray.600"
  //     {...props}
  //   />
  // ),

  // Horizontal rule
  // hr: () => (
  //   <particles.hr
  //     borderWidth="0"
  //     borderTop="1px"
  //     borderColor="gray.200"
  //     marginY="8"
  //   />
  // ),

  // Links
  a: (props) => (
    <Text
      as="a"
      color="blue.600"
      textDecoration="underline"
      _hover={{ color: 'blue.700' }}
      {...props}
    />
  ),

  // Tables
  // table: ({ ref, ...props }) => (
  //   <particles.table
  //     width="full"
  //     marginBottom="6"
  //     borderWidth="1px"
  //     borderColor="gray.200"
  //     borderRadius="lg"
  //     overflow="hidden"
  //     {...props}
  //   />
  // ),
  // thead: ({ ref, ...props }) => <particles.thead bg="gray.50" {...props} />,
  // tbody: ({ ref, ...props }) => <particles.tbody {...props} />,
  // tr: ({ ref, ...props }) => (
  //   <particles.tr borderBottom="1px" borderColor="gray.200" {...props} />
  // ),
  // th: (props) => (
  //   <Text
  //     as="th"
  //     padding="3"
  //     textAlign="left"
  //     fontSize="sm"
  //     fontWeight="semibold"
  //     color="gray.900"
  //     {...props}
  //   />
  // ),
  // td: (props) => (
  //   <Text as="td" padding="3" fontSize="sm" color="gray.700" {...props} />
  // ),

  // Strong and emphasis
  strong: (props) => <Text as="strong" fontWeight="semibold" {...props} />,
  em: (props) => <Text as="em" fontStyle="italic" {...props} />,

  // You can add custom components here
  Tabs,
  Accordion,
  Stack,
  Box,
};
