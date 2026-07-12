import { css, cx, sva } from '@bend-ui/styled-system/css';
import { visuallyHidden } from '@bend-ui/styled-system/patterns';
import { AlertCircleIcon } from 'lucide-react';
import { Paragraph } from '@bend-ui/base-ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = { title: 'Blocks/InputGroup' };
export default meta;

export const InputWithInlineLeadingAddOnAndTrailingDropdown: StoryObj = {
  render: () => {
    // Recipe
    const styles = sva({
      slots: [
        'label',
        'wrapper',
        'input',
        'addon',
        'addonStart',
        'addonEnd',
        'select',
      ],
      base: {
        label: {
          display: 'block',
          fontSize: 'sm',
          fontWeight: 'medium',
          color: 'gray.900',
        },
        wrapper: {
          pos: 'relative',
          position: 'relative',
          display: 'flex',
          bgColor: 'fill.weak',
          border: 'input',
          rounded: 'md',
          shadow: 'sm',
        },
        input: {
          display: 'block',
          w: 'full',
          pt: '1.5',
          pb: '1.5',
          pl: '6',
          pr: '3',
          bgColor: 'transparent',
          color: 'gray.900',
          _placeholder: { color: 'gray.400' },
          _focus: { shadow: 'md' },
          sm: { fontSize: 'sm' },
        },
        addon: {
          pos: 'absolute',
          display: 'flex',
          alignItems: 'center',
          color: 'gray.500',
          sm: { fontSize: 'sm' },
        },
        addonStart: {
          top: '0',
          bottom: '0',
          left: '0',
          pl: 'md',
        },
        addonEnd: {
          top: '0',
          bottom: '0',
          right: '0',
          pr: 'md',
        },
        select: {
          h: 'full',
          rounded: 'md',
          borderWidth: '0px',
          bgColor: 'transparent',
          pt: '0',
          pb: '0',
          pl: '2',
          pr: '7',
          color: 'gray.500',
          _focus: { shadow: '2' },
          sm: { fontSize: 'sm' },
        },
      },
    });

    // Render
    const classes = styles();
    return (
      <div>
        <label className={classes.label} htmlFor="price">
          Price
        </label>
        <div className={classes.wrapper}>
          <div className={cx(classes.addon, classes.addonStart)}>
            <span
              className={css({
                color: 'gray.500',
                sm: { fontSize: 'sm' },
              })}
            >
              $
            </span>
          </div>
          <input
            className={classes.input}
            id="price"
            name="price"
            placeholder="0.00"
            type="text"
          />
          <div className={cx(classes.addon, classes.addonEnd)}>
            <label className={visuallyHidden()} htmlFor="currency">
              Currency
            </label>
            <select className={classes.select} id="currency" name="currency">
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    );
  },
};

export const WithError: StoryObj = {
  render: () => {
    const styles = sva({
      slots: ['root', 'input', 'addon', 'addonStart', 'addonEnd'],
      base: {
        root: {
          position: 'relative',
          display: 'flex',
          bgColor: 'bg.input',
          border: 'input',
          rounded: 'md',
          shadow: 'sm',
          _invalid: {
            color: 'danger',
            border: 'danger',
          },
        },
        input: {
          flex: '1 1 auto',
          appearance: 'none',
          bgColor: 'transparent',
          px: '3',
          py: '3',
        },
        addon: {
          position: 'absolute',
          height: 'full',
          display: 'flex',
          alignItems: 'center',
          padding: 'md',
          _groupInvalid: {
            color: 'danger',
          },
        },
        addonEnd: { top: '0', bottom: '0', right: '0' },
      },
    });

    const classes = styles();

    return (
      <div className={cx('group', classes.root)} data-invalid="true">
        <input className={classes.input} placeholder="Input text" type="text" />
        <div className={cx(classes.addon, classes.addonEnd)}>
          <AlertCircleIcon />
        </div>
        <Paragraph>Input text</Paragraph>
      </div>
    );
  },
};
