import { css } from 'lit';

export const styles = [
  css`
    .wrapper {
      border: 1px solid black;
      border-top: 5px solid red;
      padding: 10px;
      border-radius: 5px;
    }

    .primary {
      border-top-color: blue;
    }
    .success {
      border-top-color: green;
    }
    .neutral {
      border-top-color: grey;
    }
    .warning {
      border-top-color: yellow;
    }
    .danger {
      border-top-color: red;
    }
  `,
];
