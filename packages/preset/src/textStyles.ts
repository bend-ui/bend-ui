import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  body: {
    DEFAULT: {
      value: {
        fontFamily: 'body',
        fontWeight: 'normal',
        fontSize: '1rem',
        lineHeight: '1.5',
      },
    },
    sm: {
      value: {
        fontFamily: 'body',
        fontWeight: 'normal',
        fontSize: '0.875rem',
        lineHeight: '1.5',
      },
    },
  },
  headline: {
    value: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: '2.25rem',
      lineHeight: '1.2',
      letterSpacing: 'heading',
    },
  },
  title: {
    DEFAULT: {
      value: {
        fontFamily: 'heading',
        fontWeight: 'semibold',
        fontSize: '1.5rem',
        lineHeight: '1.25',
        letterSpacing: 'heading',
      },
    },
  },
  subtitle: {
    value: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: '1.125rem',
      lineHeight: '1.5',
    },
  },
  caption: {
    value: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: '0.8125rem',
      lineHeight: '1.5',
    },
  },
  control: {
    sm: {
      value: {
        fontFamily: 'body',
        fontWeight: 'medium',
        fontSize: { base: '1rem', sm: '0.875rem' },
        lineHeight: '1.5',
      },
    },
    md: {
      value: {
        fontFamily: 'body',
        fontWeight: 'medium',
        fontSize: { base: '1rem', sm: '0.875rem' },
        lineHeight: '1.5',
      },
    },
    lg: {
      value: {
        fontFamily: 'body',
        fontWeight: 'medium',
        fontSize: '1rem',
        lineHeight: '1.5',
      },
    },
  },
});
