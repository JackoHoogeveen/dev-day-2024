import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { useArgs } from '@storybook/preview-api';
import { StatusButtonComponent } from './status-button.component';
import { statusses } from './status-button.types';

const component = new StatusButtonComponent();

const meta: Meta<StatusButtonComponent> = {
  title: 'Status button',
  component: component.tagName,
  argTypes: {
    activeStatus: {
      control: {
        type: 'select',
      },
      options: statusses,
    },
  },
  args: {
    activeStatus: 'neutral',
  },
  render: (args: StatusButtonComponent) =>
    html`<status-button status="${args.activeStatus}">Hello</status-button>`,
};

export default meta;

export const Switching = {
  render: (args: StatusButtonComponent) => {
    const [{ activeStatus }, updateArgs] = useArgs();
    const options = ['neutral', 'busy', 'succes', 'error'];

    setTimeout(() => {
      const newStatus = options[Math.floor(Math.random() * options.length)];
      updateArgs({ ...args, activeStatus: newStatus });
    }, 1000);

    return html` <status-button status="${activeStatus}">
      <p slot="neutral">Neutral text</p>
      <p slot="busy">Busy text</p>
      <p slot="succes">Succes text</p>
      <p slot="error">Error text</p>
    </status-button>`;
  },
};
