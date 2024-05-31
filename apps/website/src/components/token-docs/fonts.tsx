import { css } from '@particles/styled-system/css';
import { stack } from '@particles/styled-system/patterns';
import { defaultFonts } from './query';

export const Fonts = () => (
  <div className={stack({ gap: '4', fontSize: 'sm' })}>
    {defaultFonts.map((token) => (
      <div key={token.name} className={stack({ w: 'full' })}>
        <div style={{ fontFamily: token.value, fontSize: '32px' }}>Ag</div>
        <p className={css({ fontWeight: 'medium' })}>{token.extensions.prop}</p>
        <p className={css({ opacity: '0.6' })}>{token.value}</p>
      </div>
    ))}
  </div>
);
