import Image from 'next/image';
import { center, splitLayout, stack } from '@bend-ui/styled-system/patterns';
import { css, cx } from '@bend-ui/styled-system/css';
import { Button, Input } from '@bend-ui/radix';

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
        alt=""
        className={css({
          objectFit: 'cover',
        })}
        fill
        src="/images/bg.jpg"
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
        <label htmlFor="">Email</label>
        <Input />
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
