import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { popover } from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/internal';
import { Button } from '../Button';

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = (props: PopoverPrimitive.Trigger.Props) => {
  const { children, render, ...rest } = props;
  const renderProp = render || <Button />;
  return (
    <PopoverPrimitive.Trigger render={renderProp} {...rest}>
      {children}
    </PopoverPrimitive.Trigger>
  );
};
const PopoverPortal = PopoverPrimitive.Portal;

export type PopoverPositionerProps = PopoverPrimitive.Positioner.Props;

const PopoverPositioner = withRecipe<PopoverPositionerProps>(
  PopoverPrimitive.Positioner,
  popover,
  'root',
);

export type PopoverPopupProps = PopoverPrimitive.Popup.Props;

const PopoverPopup = withParts<PopoverPopupProps>(
  PopoverPrimitive.Popup,
  'content',
);

export type PopoverArrowProps = PopoverPrimitive.Arrow.Props;

const PopoverArrow = withParts<PopoverArrowProps>(
  PopoverPrimitive.Arrow,
  'arrow',
);

export type PopoverTitleProps = PopoverPrimitive.Title.Props;

const PopoverTitle = withParts<PopoverTitleProps>(
  PopoverPrimitive.Title,
  'title',
);

export type PopoverDescriptionProps = PopoverPrimitive.Description.Props;

const PopoverDescription = withParts<PopoverDescriptionProps>(
  PopoverPrimitive.Description,
  'description',
);

export type PopoverCloseProps = PopoverPrimitive.Close.Props;

const PopoverClose = withParts<PopoverCloseProps>(
  PopoverPrimitive.Close,
  'closeTrigger',
);

export interface PopoverContentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const PopoverContent = (props: PopoverContentProps) => {
  const { title, description, children } = props;
  return (
    <PopoverPortal>
      <PopoverPositioner sideOffset={8}>
        <PopoverPopup>
          <PopoverArrow>
            <ArrowSvg />
          </PopoverArrow>
          {title && <PopoverTitle>{title}</PopoverTitle>}
          <PopoverDescription>
            {description}
            {children}
          </PopoverDescription>
        </PopoverPopup>
      </PopoverPositioner>
    </PopoverPortal>
  );
};

export interface PopoverProps extends PopoverPrimitive.Root.Props {
  trigger?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const Component = (props: PopoverProps) => {
  const { title, description, children, trigger, ...rest } = props;
  return (
    <PopoverRoot {...rest}>
      {trigger && <PopoverTrigger>{trigger}</PopoverTrigger>}
      {title || description ? (
        <PopoverContent
          title={title}
          description={description}
        ></PopoverContent>
      ) : (
        children
      )}
    </PopoverRoot>
  );
};

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z" />
      <path d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z" />
      <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
    </svg>
  );
}

export const Popover = Object.assign(Component, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
  Content: PopoverContent,
});
