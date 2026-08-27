// The public sample shown on /collection, grouped by topic.
// Within each topic, keep entries alphabetical by author surname.

export type Topic = "Mathematics" | "Philosophy" | "Literature" | "Sets";

export const TOPICS: Topic[] = [
  "Mathematics",
  "Philosophy",
  "Literature",
  "Sets",
];

export interface Acquisition {
  title: string;
  author: string;
  topic: Topic;
  note?: string; // edition, translator, provenance — only if worth saying
}

export const ACQUISITIONS: Acquisition[] = [
  // Mathematics
  { topic: "Mathematics", title: "Gödel, Escher, Bach: An Eternal Golden Braid", author: "Douglas Hofstadter" },
  { topic: "Mathematics", title: "Ricci Flow and the Poincaré Conjecture", author: "John Morgan & Gang Tian", note: "Clay Mathematics Monographs" },
  { topic: "Mathematics", title: "Differential Harnack Inequalities and the Ricci Flow", author: "Reto Müller" },
  { topic: "Mathematics", title: "Gödel's Proof", author: "Ernest Nagel & James R. Newman" },

  // Philosophy
  { topic: "Philosophy", title: "Nicomachean Ethics", author: "Aristotle", note: "Library of Liberal Arts" },
  { topic: "Philosophy", title: "Phenomenology of Spirit", author: "G. W. F. Hegel", note: "Miller translation" },
  { topic: "Philosophy", title: "Being and Time", author: "Martin Heidegger" },
  { topic: "Philosophy", title: "Leviathan", author: "Thomas Hobbes", note: "Hackett" },
  { topic: "Philosophy", title: "Critique of Pure Reason", author: "Immanuel Kant", note: "Guyer & Wood translation, Cambridge" },
  { topic: "Philosophy", title: "Nietzsche: Philosopher, Psychologist, Antichrist", author: "Walter Kaufmann" },
  { topic: "Philosophy", title: "The Prince", author: "Niccolò Machiavelli" },
  { topic: "Philosophy", title: "On the Genealogy of Morality", author: "Friedrich Nietzsche" },
  { topic: "Philosophy", title: "On What Matters", author: "Derek Parfit", note: "vols. 1–2" },
  { topic: "Philosophy", title: "The Social Contract", author: "Jean-Jacques Rousseau", note: "Hackett" },
  { topic: "Philosophy", title: "Being and Nothingness", author: "Jean-Paul Sartre" },
  { topic: "Philosophy", title: "Bubbles", author: "Peter Sloterdijk", note: "Spheres, vol. 1" },
  { topic: "Philosophy", title: "Charisma and Disenchantment: The Vocation Lectures", author: "Max Weber", note: "Searls translation, NYRB" },

  // Literature
  { topic: "Literature", title: "Finnegans Wake", author: "James Joyce" },
  { topic: "Literature", title: "Ulysses", author: "James Joyce" },
  { topic: "Literature", title: "Anna Karenina", author: "Leo Tolstoy" },
  { topic: "Literature", title: "War and Peace", author: "Leo Tolstoy" },

  // Sets
  { topic: "Sets", title: "The Harvard Classics", author: "Charles W. Eliot, ed.", note: "51 vols." },
  { topic: "Sets", title: "Great Books of the Western World", author: "Robert Maynard Hutchins, ed.", note: "54 vols., Britannica" },
];
