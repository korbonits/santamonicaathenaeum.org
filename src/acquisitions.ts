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
  { title: "Ricci Flow and the Poincaré Conjecture", author: "John Morgan & Gang Tian", note: "Clay Mathematics Monographs" },
  { title: "Differential Harnack Inequalities and the Ricci Flow", author: "Reto Müller" },
  { title: "Gödel's Proof", author: "Ernest Nagel & James R. Newman" },
  { title: "Gödel, Escher, Bach: An Eternal Golden Braid", author: "Douglas Hofstadter" },
  { title: "Building Machine Learning Systems with a Feature Store", author: "Jim Dowling" },
  { title: "AI Engineering", author: "Chip Huyen" },
  { title: "The Harvard Classics", author: "Charles W. Eliot, ed.", note: "complete set" },
  { title: "Great Books of the Western World", author: "Robert Maynard Hutchins, ed.", note: "complete Britannica set" },
  { title: "Artificial Intelligence: A Guide for Thinking Humans", author: "Melanie Mitchell" },
  { title: "The Intelligent Investor", author: "Benjamin Graham" },
  { title: "Nose Dive: A Field Guide to the World's Smells", author: "Harold McGee" },
  { title: "On the Genealogy of Morality", author: "Friedrich Nietzsche" },
  { title: "Charisma and Disenchantment: The Vocation Lectures", author: "Max Weber", note: "Searls translation, NYRB" },
  { title: "The Staff Engineer's Path", author: "Tanya Reilly" },
];
