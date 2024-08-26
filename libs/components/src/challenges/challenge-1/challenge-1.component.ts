import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-1.styles';

@customElement('challenge-1')
export class Challenge1Component extends LitElement {
  static override styles = styles;

  override render() {
    return html`<h1>Nothing fancy here, just a simple alert.</h1>`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-1': Challenge1Component;
  }
}
