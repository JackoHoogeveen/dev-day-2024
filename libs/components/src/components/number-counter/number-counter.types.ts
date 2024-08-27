export const statusses = ['neutral', 'busy', 'succes', 'error'] as const;
export type StatusType = (typeof statusses)[number];

