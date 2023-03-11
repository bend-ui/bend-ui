import { forwardRef } from '@particles/primitives';
import { IconButton } from '../IconButton';
import type { ButtonProps } from '../Button';

type DismissButtonProps = ButtonProps;

const DismissButton = forwardRef<DismissButtonProps, 'button'>((props, ref) => {
  const { ...rest } = props;

  return (
    <IconButton ref={ref} {...rest}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </IconButton>
  );
});

export default DismissButton;
