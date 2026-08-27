// Recent acquisitions, newest first. Shown on /collection while the
// TinyCat catalog is being prepared, and as a living list after.
// Keep it to the last ~10; older entries just get deleted.

export interface Acquisition {
  title: string;
  author: string;
  note?: string; // edition, translator, provenance — only if worth saying
}

export const ACQUISITIONS: Acquisition[] = [
  { title: "Phenomenology of Spirit", author: "G. W. F. Hegel", note: "Miller translation" },
  { title: "Critique of Pure Reason", author: "Immanuel Kant", note: "Guyer & Wood translation, Cambridge" },
  { title: "Nietzsche: Philosopher, Psychologist, Antichrist", author: "Walter Kaufmann" },
  { title: "Being and Nothingness", author: "Jean-Paul Sartre" },
  { title: "Being and Time", author: "Martin Heidegger" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "Finnegans Wake", author: "James Joyce" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "Anna Karenina", author: "Leo Tolstoy" },
  { title: "On What Matters", author: "Derek Parfit", note: "vols. 1–2" },
  { title: "Bubbles", author: "Peter Sloterdijk", note: "Spheres, vol. 1" },
];
