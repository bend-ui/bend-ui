import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    '.level': {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
});
