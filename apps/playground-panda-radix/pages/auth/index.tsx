import Image from 'next/image';
import { center, splitLayout, stack } from '@particles/panda-system/patterns';
import { css, cx } from '@particles/panda-system/css';
import { Button } from '@particles/panda-radix';
import { TextField } from '../../components';

const AuthPage = () => (
  <div className={splitLayout()}>
    <div
      className={center({
        bgColor: 'surface',
        p: 'md',
        position: 'relative',
      })}
    >
      <Image
        src="/images/bg.jpg"
        alt=""
        fill
        className={css({
          objectFit: 'cover',
        })}
      />
      Marketing
    </div>
    <div className={center({ p: 'md' })}>
      <div className={cx(stack())}>
        <h1 className={css({ textAlign: 'center', textStyle: 'headline' })}>
          Create an account
        </h1>
        <p className={css({ textAlign: 'center' })}>
          And I really want a wife and kids. Oh hey, didn&apos;t see you.
        </p>
        <TextField label="Email" />
        <span>Or continue with</span>
        <Button>Google</Button>
        <p>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  </div>
);

export default AuthPage;
