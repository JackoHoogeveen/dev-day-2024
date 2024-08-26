import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge1Component } from './challenge-1.component';

const component = new Challenge1Component();

const meta: Meta<Challenge1Component> = {
  title: 'Challenge 1',
  component: component.tagName,
  argTypes: {
  },
  args: {
  },
  render: (args: Challenge1Component) =>
    html`<challenge-1 />`,
};

export default meta;

export const Default = {};
