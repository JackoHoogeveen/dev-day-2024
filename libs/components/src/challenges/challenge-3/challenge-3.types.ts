export const AlertTypes = [
  'primary',
  'success',
  'neutral',
  'warning',
  'danger',
  'disabled',
] as const;
export type AlertType = (typeof AlertTypes)[number];
