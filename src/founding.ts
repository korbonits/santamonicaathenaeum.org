// The one number to update as pledges come in.
export const FOUNDER_COUNT = 0;

export const THRESHOLDS = [
  { count: 25, unlocks: "opens the reading room" },
  { count: 50, unlocks: "signs a larger space" },
  { count: 100, unlocks: "adds a lecture room" },
] as const;

export const CONTACT_EMAIL = "hello@santamonicaathenaeum.org";
