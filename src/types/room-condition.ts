export const RoomCondition = {
  Matching: 0,
  Progressing: 1,
} as const;

export type RoomCondition = (typeof RoomCondition)[keyof typeof RoomCondition];
