import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-3.styles';
import { AlertType } from './challenge-3.types';

@customElement('challenge-3')
export class Challenge3Component extends LitElement {
  static override styles = styles;

  @property({ type: String })
  alertType: AlertType = 'primary';

  override render() {
    return html`
      <div class="wrapper ${this.alertType}">
        <h1><slot name="title">This is a title</slot></h1>
        <div>
          <slot>
            <p>Nothing fancy here, just a simple alert.</p>
          </slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-3': Challenge3Component;
  }
}
