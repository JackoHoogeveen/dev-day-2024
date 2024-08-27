import { css } from 'lit';

export const styles = [
  css`
    :host {
      --status-button-neutral: #007bff;
      --status-button-busy: #ffc107;
      --status-button-succes: #28a745;
      --status-button-error: #dc3545;

      --status-button-height: 32px;
      --status-button-width: 128px;
      --status-button-animation-length: .15s;
    }

    .bottom {
      top: var(--status-button-height);
    }

    .center {
      top: 0;
    }

    .top {
      top: calc(var(--status-button-height) * -1);
    }

    button {
      transition: background-color var(--status-button-animation-length) ease-in;
      height: var(--status-button-height);
      width: var(--status-button-width);
      display: inline-block;
      overflow: hidden;
      border: none;
      box-sizing: border-box;
      position: relative;
      border-radius: 5px;
      color: white;
      font-weight: bold;

      div {
        transition: top var(--status-button-animation-length) ease-in;
        height: var(--status-button-height);
        width: var(--status-button-width);
        position: absolute;
        left: 0;
        top: 0;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }


    .status-neutral {
      background-color: var(--status-button-neutral);
    }
    .status-busy {
      background-color: var(--status-button-busy);
    }
    .status-succes {
      background-color: var(--status-button-succes);
    }
    .status-error {
      background-color: var(--status-button-error);
    }
  `,
];
