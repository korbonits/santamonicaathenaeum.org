// Recent acquisitions, newest first. Shown on /collection while the
// TinyCat catalog is being prepared, and as a living list after.
// Keep it to the last ~10; older entries just get deleted.

export interface Acquisition {
  title: string;
  author: string;
  note?: string; // edition, translator, provenance — only if worth saying
}

export const ACQUISITIONS: Acquisition[] = [
  // { title: "Elements", author: "Euclid", note: "Heath translation, Dover, 3 vols." },
];
