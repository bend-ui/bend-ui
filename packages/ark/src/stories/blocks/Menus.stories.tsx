import { css, sva } from '@particles/styled-system/css';
import { stack } from '@particles/styled-system/patterns';
import {
  TbDashboard,
  TbLogout,
  TbMoon,
  TbPlus,
  TbSearch,
  TbSettings,
  TbStar,
} from 'react-icons/tb';
import type { Meta, StoryObj } from '@storybook/react';

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
          bgColor: 'bg.surface',
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
            bgColor: 'bg.primary',
            color: 'primary.fg',
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
                bgColor: 'bg.primary',
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
              <TbDashboard />
              Dashboard
            </div>
            <div className={classes.item}>
              <TbSettings />
              Settings
            </div>
            <div className={classes.item}>
              <TbSearch />
              Search
            </div>
            <div className={classes.item}>
              <TbStar />
              Favorites
            </div>
            <hr className={classes.divider} />
            <div className={classes.item}>
              <TbMoon />
              Dark mode
            </div>
            <hr className={classes.divider} />
            <div className={classes.item}>
              <TbPlus />
              Add account
            </div>
            <div className={classes.item}>
              <TbLogout />
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
