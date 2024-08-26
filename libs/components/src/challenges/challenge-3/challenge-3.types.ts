export const AlertTypes = [
  'primary',
  'success',
  'neutral',
  'warning',
  'danger',
] as const;
export type AlertType = (typeof AlertTypes)[number];
