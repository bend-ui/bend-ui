import { cx } from '@particles/styled-system/css';
import { table } from '@particles/styled-system/recipes';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Blocks/Table' };
export default meta;

export const Base: StoryObj = {
  render: () => {
    const classes = table();
    return (
      <table className={cx(classes.root)}>
        <thead className={classes.head}>
          <tr className={classes.row}>
            <th className={classes.header}>Product</th>
            <th className={classes.header}>Description</th>
            <th className={classes.header}>Price</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          <tr className={classes.row}>
            <td className={classes.cell}>Practical Concrete Sausages</td>
            <td className={classes.cell}>
              The automobile layout consists of a front-engine design, with
              transaxle-type transmissions mounted at the rear of the engine and
              four wheel drive
            </td>
            <td className={classes.cell}>442.00</td>
          </tr>
          <tr className={classes.row}>
            <td className={classes.cell}>Gorgeous Rubber Soap</td>
            <td className={classes.cell}>
              Carbonite web goalkeeper gloves are ergonomically designed to give
              easy fit
            </td>
            <td className={classes.cell}>885.00</td>
          </tr>
        </tbody>
      </table>
    );
  },
};
