import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './status-button.styles';
import { StatusType } from './status-button.types';

@customElement('status-button')
export class StatusButtonComponent extends LitElement {
  static override styles = styles;

  @property({ type: String })
  set status(status: StatusType) {
    if (status === this.activeStatus) {
      return;
    }

    if (this.#previousStatus) {
      this.#positions[this.#previousStatus] = 'top';
    }

    this.#previousStatus = this.activeStatus;
    this.activeStatus = status;

    this.#positions[this.#previousStatus] = 'top';

    this.#positions[this.activeStatus] = 'center';
  }

  @property()
  activeStatus: StatusType = 'neutral';

  #previousStatus: StatusType | undefined;

  #positions: Record<StatusType, 'top' | 'center' | 'bottom'> = {
    neutral: 'center',
    busy: 'top',
    succes: 'top',
    error: 'top',
  };

  override render() {
    return html`
      <button class="status-${this.activeStatus}">
        <div class="wrapper-neutral ${this.#positions.neutral}">
          <slot name="neutral">Submit</slot>
        </div>
        <div class="wrapper-busy ${this.#positions.busy}">
          <slot name="busy">Loading <sl-spinner></sl-spinner></slot>
        </div>
        <div class="wrapper-succes ${this.#positions.succes}">
          <slot name="succes">Succes</slot>
        </div>
        <div class="wrapper-error ${this.#positions.error}">
          <slot name="error">Error</slot>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'status-button': StatusButtonComponent;
  }
}
