import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { NumberCounterComponent } from './number-counter.component';

const component = new NumberCounterComponent();

const meta: Meta<NumberCounterComponent> = {
  title: 'Status button',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: NumberCounterComponent) =>
    html`<number-counter></number-counter>`,
};

export default meta;

export const Default = {};
