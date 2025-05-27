import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '@/components/DatePicker/DatePicker';
import { useState } from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [value, setValue] = useState('');
      return <Story args={{ value, setValue }} />;
    },
  ],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'enable',
    value: '',
    setValue: () => {},
  },
};
