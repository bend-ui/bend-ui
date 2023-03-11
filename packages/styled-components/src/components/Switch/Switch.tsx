import { system } from '../../system';
import type { SystemProps } from '../../system';

type SwitchProps = SystemProps;

export const Switch = (props: SwitchProps) => {
  const { children, ...rest } = props;

  return (
    <system.div {...rest}>
      <input type="checkbox" hidden />
    </system.div>
  );
};
