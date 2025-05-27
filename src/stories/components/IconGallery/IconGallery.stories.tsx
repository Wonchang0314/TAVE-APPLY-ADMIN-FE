import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery } from './IconGallery';

const meta = {
  title: 'Components/IconGallery',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Gray',
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 