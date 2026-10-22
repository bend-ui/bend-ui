import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    DEFAULT: {
      description: 'The body text style - used in paragraphs',
      value: {
        fontFamily: 'body',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0',
        textDecoration: 'none',
        textTransform: 'none',
      },
    },
    sm: {
      description: 'The body text style - used in paragraphs',
      value: {
        fontFamily: 'body',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '0',
        textDecoration: 'none',
        textTransform: 'none',
      },
    },
  },
  headline: {
    description: 'The headline text style - used for big titles',
    value: {
      fontFamily: 'heading',
      fontWeight: '800',
      fontSize: '36px',
      lineHeight: '56px',
      letterSpacing: 'heading',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  title: {
    DEFAULT: {
      description: 'The title text style - used for headings',
      value: {
        fontFamily: 'heading',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: 'heading',
        textDecoration: 'none',
        textTransform: 'none',
      },
    },
  },
  subtitle: {
    description: 'The subtitle text style - used for content under headings',
    value: {
      fontFamily: 'heading',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: 'heading',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
  caption: {
    value: {
      fontFamily: 'body',
      fontWeight: '800',
      fontSize: '24px',
      lineHeight: '56px',
      letterSpacing: '0',
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
});
