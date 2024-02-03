import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontFamily: 'body',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
  headline: {
    description: 'The headline text style - used for big titles',
    value: {
      fontFamily: 'heading',
      fontWeight: '800',
      fontSize: '36px',
      lineHeight: '56px',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
  title: {
    description: 'The title text style - used for headings',
    value: {
      fontFamily: 'heading',
      fontWeight: '800',
      fontSize: '36px',
      lineHeight: '56px',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
  subtitle: {
    description: 'The subtitle text style - used for content under headings',
    value: {
      fontFamily: 'heading',
      fontWeight: '800',
      fontSize: '24px',
      lineHeight: '56px',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
  caption: {
    value: {
      fontFamily: 'body',
      fontWeight: '800',
      fontSize: '24px',
      lineHeight: '56px',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
});
