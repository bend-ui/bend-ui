import { css, sva } from '@particles/styled-system/css';
import { stack } from '@particles/styled-system/patterns';
import {
  LayoutDashboardIcon,
  LogOutIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Blocks/Menus',
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    // Styles
    const menuStyles = sva({
      slots: ['root', 'header', 'content', 'footer', 'list', 'item', 'divider'],
      base: {
        root: {
          maxW: 'min-content',
          minW: '320px',
          bgColor: 'fill.weak',
          border: 'base',
          borderRadius: 'base',
        },
        header: {
          padding: 'lg',
          borderBottom: 'base',
        },
        content: {},
        footer: {
          padding: 'lg',
          borderTop: 'base',
        },
        list: {
          padding: 'base',
        },
        item: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'sm',
          px: 'lg',
          py: 'md',
          _hover: {
            bgColor: 'fill.hover',
            color: 'text.primary',
          },
        },
        divider: {
          my: 'sm',
          borderTop: 'base',
        },
      },
    });

    // Render
    const classes = menuStyles();
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={stack({ direction: 'row' })}>
            <div
              className={css({
                w: '12',
                h: '12',
                aspectRatio: 'square',
                rounded: 'full',
                border: 'base',
                bgColor: 'fill.primary',
                overflow: 'hidden',
              })}
            >
              <img alt="" src="https://github.com/nanopx.png" />
            </div>
            <div className={stack({ gap: 'xs' })}>
              <span>Username</span>
              <span>email</span>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.list}>
            <div className={classes.item}>
              <LayoutDashboardIcon />
              Dashboard
            </div>
            <div className={classes.item}>
              <SettingsIcon />
              Settings
            </div>
            <div className={classes.item}>
              <SearchIcon />
              Search
            </div>
            <div className={classes.item}>
              <StarIcon />
              Favorites
            </div>
            <hr className={classes.divider} />
            <div className={classes.item}>
              <MoonIcon />
              Dark mode
            </div>
            <hr className={classes.divider} />
            <div className={classes.item}>
              <PlusIcon />
              Add account
            </div>
            <div className={classes.item}>
              <LogOutIcon />
              Logout
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div>Footer</div>
        </div>
      </div>
    );
  },
};
