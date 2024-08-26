import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-2.styles';

@customElement('challenge-2')
export class Challenge2Component extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <h1><slot name="title"></slot></h1>
      <div>
        <slot>
          <p>Nothing fancy here, just a simple alert.</p>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-2': Challenge2Component;
  }
}
