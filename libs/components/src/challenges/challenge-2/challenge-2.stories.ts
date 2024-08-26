import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge2Component } from './challenge-2.component';

const component = new Challenge2Component();

const meta: Meta<Challenge2Component> = {
  title: 'Challenge 2',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: Challenge2Component) => html`<challenge-2 />`,
};

export default meta;

export const Default = {};

export const Content = {
  render: () => `<challenge-2>content</challenge-2>`,
};

export const TitleAndContent = {
  render: () => `
    <challenge-2>
      <div slot="title">Title</div>
      Content
    </challenge-2>
  `,
};
