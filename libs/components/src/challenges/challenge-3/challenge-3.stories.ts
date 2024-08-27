import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge3Component } from './challenge-3.component';

const component = new Challenge3Component();

const meta: Meta<Challenge3Component> = {
  title: 'Challenge 3',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: Challenge3Component) => html`<challenge-3 />`,
};

export default meta;

export const Default = {};

export const Content = {
  render: () => html`<challenge-3></challenge-3>`,
};

export const Primary = {
  render: () => html`<challenge-3 alertType="primary"></challenge-3>`,
};
export const Success = {
  render: () => html`<challenge-3 alertType="succes"></challenge-3>`,
};
export const Neutral = {
  render: () => html`<challenge-3 alertType="neutral"></challenge-3>`,
};
export const Warning = {
  render: () => html`<challenge-3 alertType="warning"></challenge-3>`,
};
export const Danger = {
  render: () => html`<challenge-3 alertType="danger"></challenge-3>`,
};

// testen?
