import { Table } from './Table';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Table> = {
  title: 'Components/Data/Table',
  component: Table,
  argTypes: {
    isStriped: {
      control: 'boolean',
    },
    witTableBorder: {
      control: 'boolean',
    },
    withColumnBorder: {
      control: 'boolean',
    },
    withRowBorder: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const data = [
  {
    first_name: 'Roderic',
    last_name: 'Noweak',
    email: 'rnoweak0@msu.edu',
    job_title: 'Compensation Analyst',
  },
  {
    first_name: 'Donielle',
    last_name: 'Commin',
    email: 'dcommin1@blog.com',
    job_title: 'Analyst Programmer',
  },
  {
    first_name: 'Pandora',
    last_name: 'Bradbrook',
    email: 'pbradbrook2@yelp.com',
    job_title: 'Editor',
  },
  {
    first_name: 'Deedee',
    last_name: 'Tomsen',
    email: 'dtomsen3@amazon.com',
    job_title: 'Recruiter',
  },
  {
    first_name: 'Sharona',
    last_name: 'Biskup',
    email: 'sbiskup4@creativecommons.org',
    job_title: 'Graphic Designer',
  },
  {
    first_name: 'Sharon',
    last_name: 'Ochiltree',
    email: 'sochiltree5@bloglines.com',
    job_title: 'Senior Quality Engineer',
  },
  {
    first_name: 'Nessy',
    last_name: 'Simpole',
    email: 'nsimpole6@edublogs.org',
    job_title: 'Biostatistician I',
  },
  {
    first_name: 'Rhetta',
    last_name: 'Longford',
    email: 'rlongford7@histats.com',
    job_title: 'Financial Analyst',
  },
  {
    first_name: 'Brian',
    last_name: 'Prose',
    email: 'bprose8@samsung.com',
    job_title: 'Internal Auditor',
  },
  {
    first_name: 'Saloma',
    last_name: 'Dashwood',
    email: 'sdashwood9@vk.com',
    job_title: 'Human Resources Assistant II',
  },
];

export const Base: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Header>
        <Table.Row>
          <Table.Head>First Name</Table.Head>
          <Table.Head>Last Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Job Title</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => (
          <Table.Row key={row.first_name}>
            <Table.Cell>{row.first_name}</Table.Cell>
            <Table.Cell>{row.last_name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell>{row.job_title}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};

export const Striped: Story = {
  ...Base,
  args: {
    isStriped: true,
    witTableBorder: false,
    withColumnBorder: false,
    withRowBorder: false,
  },
};

export const Full: Story = {
  ...Base,
  args: {
    isStriped: false,
    witTableBorder: true,
    withColumnBorder: true,
    withRowBorder: true,
  },
};
