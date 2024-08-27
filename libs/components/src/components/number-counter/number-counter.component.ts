import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './number-counter.styles';
import { StatusType } from './number-counter.types';

@customElement('number-cpunter')
export class NumberCounterComponent extends LitElement {
  static override styles = styles;


  override render() {
    return html`
      <span></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'number-counter': NumberCounterComponent;
  }
}
