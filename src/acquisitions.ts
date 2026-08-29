// The public sample shown on /collection, grouped by topic.
// Within each topic, keep entries alphabetical by author surname.

export type Topic = "Mathematics" | "Philosophy" | "History" | "Literature" | "Sets";

export const TOPICS: Topic[] = [
  "Mathematics",
  "Philosophy",
  "History",
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
  { topic: "Mathematics", title: "Tensor Analysis on Manifolds", author: "Richard L. Bishop & Samuel I. Goldberg", note: "Dover" },
  { topic: "Mathematics", title: "Differential Forms", author: "Henri Cartan", note: "Dover" },
  { topic: "Mathematics", title: "Abstract Algebra", author: "David S. Dummit & Richard M. Foote", note: "3rd ed., Wiley" },
  { topic: "Mathematics", title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville", note: "MIT Press" },
  { topic: "Mathematics", title: "Gödel, Escher, Bach: An Eternal Golden Braid", author: "Douglas Hofstadter" },
  { topic: "Mathematics", title: "Introduction to Differentiable Manifolds", author: "Serge Lang", note: "2nd ed., Springer Universitext" },
  { topic: "Mathematics", title: "Ricci Flow and the Poincaré Conjecture", author: "John Morgan & Gang Tian", note: "Clay Mathematics Monographs, vol. 3" },
  { topic: "Mathematics", title: "Differential Harnack Inequalities and the Ricci Flow", author: "Reto Müller" },
  { topic: "Mathematics", title: "Gödel's Proof", author: "Ernest Nagel & James R. Newman" },
  { topic: "Mathematics", title: "Foundations of Probability", author: "Alfréd Rényi", note: "Dover" },
  { topic: "Mathematics", title: "Real and Complex Analysis", author: "Walter Rudin", note: "3rd ed., McGraw-Hill" },
  { topic: "Mathematics", title: "Calculus on Manifolds", author: "Michael Spivak", note: "Benjamin" },
  { topic: "Mathematics", title: "Real Analysis", author: "Elias M. Stein & Rami Shakarchi", note: "Princeton Lectures in Analysis III" },
  { topic: "Mathematics", title: "What's Next? The Mathematical Legacy of William P. Thurston", author: "Dylan P. Thurston, ed.", note: "Annals of Mathematics Studies 205" },
  { topic: "Mathematics", title: "Foundations of Differentiable Manifolds and Lie Groups", author: "Frank W. Warner", note: "Springer GTM 94" },
  { topic: "Mathematics", title: "Essential Results of Functional Analysis", author: "Robert J. Zimmer", note: "Chicago Lectures in Mathematics" },

  // Philosophy
  { topic: "Philosophy", title: "Nicomachean Ethics", author: "Aristotle", note: "Library of Liberal Arts" },
  { topic: "Philosophy", title: "Politics", author: "Aristotle", note: "Oxford" },
  { topic: "Philosophy", title: "At the Existentialist Café", author: "Sarah Bakewell" },
  { topic: "Philosophy", title: "The Republic and The Laws", author: "Cicero", note: "Oxford" },
  { topic: "Philosophy", title: "Democracy and Education", author: "John Dewey", note: "Free Press" },
  { topic: "Philosophy", title: "Human Nature and Conduct", author: "John Dewey", note: "Modern Library" },
  { topic: "Philosophy", title: "Kant and Skepticism", author: "Michael N. Forster", note: "Princeton" },
  { topic: "Philosophy", title: "Nietzsche's New Seas", author: "Michael Allen Gillespie & Tracy B. Strong, eds.", note: "Chicago" },
  { topic: "Philosophy", title: "The Aesthetics of Mimesis", author: "Stephen Halliwell", note: "Princeton" },
  { topic: "Philosophy", title: "Phenomenology of Spirit", author: "G. W. F. Hegel", note: "Miller translation" },
  { topic: "Philosophy", title: "Basic Writings", author: "Martin Heidegger", note: "Harper Perennial" },
  { topic: "Philosophy", title: "Being and Time", author: "Martin Heidegger", note: "Macquarrie & Robinson translation, Harper Perennial" },
  { topic: "Philosophy", title: "Kant and the Problem of Metaphysics", author: "Martin Heidegger", note: "Indiana" },
  { topic: "Philosophy", title: "Nietzsche", author: "Martin Heidegger", note: "vols. 1–2, HarperOne" },
  { topic: "Philosophy", title: "Sculpture", author: "Johann Gottfried Herder", note: "Chicago" },
  { topic: "Philosophy", title: "Leviathan", author: "Thomas Hobbes", note: "Hackett" },
  { topic: "Philosophy", title: "Nietzsche", author: "Karl Jaspers" },
  { topic: "Philosophy", title: "Critique of Pure Reason", author: "Immanuel Kant", note: "Guyer & Wood translation, Cambridge" },
  { topic: "Philosophy", title: "Nietzsche: Philosopher, Psychologist, Antichrist", author: "Walter Kaufmann", note: "Princeton" },
  { topic: "Philosophy", title: "Either/Or, Part I", author: "Søren Kierkegaard", note: "Princeton" },
  { topic: "Philosophy", title: "Fear and Trembling / Repetition", author: "Søren Kierkegaard", note: "Princeton" },
  { topic: "Philosophy", title: "Philosophical Fragments", author: "Søren Kierkegaard", note: "Princeton" },
  { topic: "Philosophy", title: "Two Treatises of Government", author: "John Locke", note: "Cambridge" },
  { topic: "Philosophy", title: "The Prince", author: "Niccolò Machiavelli" },
  { topic: "Philosophy", title: "The Prince and The Discourses", author: "Niccolò Machiavelli", note: "Modern Library" },
  { topic: "Philosophy", title: "Selected Writings", author: "Karl Marx", note: "Hackett" },
  { topic: "Philosophy", title: "On Liberty and Other Essays", author: "John Stuart Mill", note: "Oxford" },
  { topic: "Philosophy", title: "On the Genealogy of Morality", author: "Friedrich Nietzsche", note: "Clark & Swensen translation, Hackett" },
  { topic: "Philosophy", title: "The Portable Nietzsche", author: "Friedrich Nietzsche", note: "Kaufmann translation, Viking" },
  { topic: "Philosophy", title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", note: "Kaufmann translation, Modern Library" },
  { topic: "Philosophy", title: "The Will to Power", author: "Friedrich Nietzsche", note: "Barnes & Noble" },
  { topic: "Philosophy", title: "On What Matters", author: "Derek Parfit", note: "vols. 1–2" },
  { topic: "Philosophy", title: "The Republic", author: "Plato", note: "Bloom translation, Basic Books" },
  { topic: "Philosophy", title: "The Discourses and Other Early Political Writings", author: "Jean-Jacques Rousseau", note: "Cambridge" },
  { topic: "Philosophy", title: "The Social Contract", author: "Jean-Jacques Rousseau", note: "Hackett" },
  { topic: "Philosophy", title: "The Social Contract and Other Later Political Writings", author: "Jean-Jacques Rousseau", note: "Cambridge" },
  { topic: "Philosophy", title: "Being and Nothingness", author: "Jean-Paul Sartre" },
  { topic: "Philosophy", title: "We Have Only This Life to Live: Selected Essays 1939–1975", author: "Jean-Paul Sartre", note: "NYRB" },
  { topic: "Philosophy", title: "Hermeneutics and Criticism", author: "Friedrich Schleiermacher", note: "Cambridge" },
  { topic: "Philosophy", title: "Bubbles", author: "Peter Sloterdijk", note: "Spheres, vol. 1, Semiotext(e)" },
  { topic: "Philosophy", title: "The Bounds of Sense", author: "P. F. Strawson", note: "Routledge" },
  { topic: "Philosophy", title: "Democracy in America", author: "Alexis de Tocqueville", note: "Harper Perennial" },
  { topic: "Philosophy", title: "The Old Regime and the French Revolution", author: "Alexis de Tocqueville", note: "Anchor" },
  { topic: "Philosophy", title: "The Marx-Engels Reader", author: "Robert C. Tucker, ed.", note: "Norton" },
  { topic: "Philosophy", title: "Charisma and Disenchantment: The Vocation Lectures", author: "Max Weber", note: "Searls translation, NYRB" },
  { topic: "Philosophy", title: "John Dewey and American Democracy", author: "Robert B. Westbrook", note: "Cornell" },
  { topic: "Philosophy", title: "Ethics and the Limits of Philosophy", author: "Bernard Williams", note: "Harvard" },
  { topic: "Philosophy", title: "Philosophical Investigations", author: "Ludwig Wittgenstein", note: "3rd ed." },
  { topic: "Philosophy", title: "Tractatus Logico-Philosophicus", author: "Ludwig Wittgenstein", note: "Barnes & Noble" },

  // History
  { topic: "History", title: "Genesis: Translation and Commentary", author: "Robert Alter", note: "Norton" },
  { topic: "History", title: "A Brief History of the Romans", author: "Mary T. Boatwright, Daniel J. Gargola & Richard J. A. Talbert", note: "Oxford" },
  { topic: "History", title: "The History of the Church", author: "Eusebius", note: "Penguin" },
  { topic: "History", title: "The Portable Greek Historians", author: "M. I. Finley, ed.", note: "Viking" },
  { topic: "History", title: "On Grand Strategy", author: "John Lewis Gaddis", note: "Penguin" },
  { topic: "History", title: "The History", author: "Herodotus", note: "Grene translation, Chicago" },
  { topic: "History", title: "The Muqaddimah", author: "Ibn Khaldun", note: "Rosenthal translation, Dawood ed., Princeton" },
  { topic: "History", title: "Thucydides: The Reinvention of History", author: "Donald Kagan" },
  { topic: "History", title: "The Government of the Roman Empire: A Sourcebook", author: "Barbara Levick", note: "2nd ed." },
  { topic: "History", title: "Among Empires", author: "Charles S. Maier", note: "Harvard" },
  { topic: "History", title: "Maximum City: Bombay Lost and Found", author: "Suketu Mehta" },
  { topic: "History", title: "The Historians of Ancient Rome", author: "Ronald Mellor", note: "2nd ed., Routledge" },
  { topic: "History", title: "The Rise of the Roman Empire", author: "Polybius", note: "Penguin Classics" },
  { topic: "History", title: "The Oxford History of Ancient Egypt", author: "Ian Shaw, ed.", note: "Oxford" },
  { topic: "History", title: "The Peloponnesian War", author: "Thucydides", note: "Hobbes translation, Chicago" },
  { topic: "History", title: "Hypatia", author: "Edward J. Watts", note: "Oxford" },
  { topic: "History", title: "The Inheritance of Rome", author: "Chris Wickham", note: "Penguin" },
  { topic: "History", title: "The Education of Cyrus", author: "Xenophon", note: "Ambler translation, Cornell" },

  // Literature
  { topic: "Literature", title: "Love in Another Language", author: "Dick Davis", note: "Carcanet" },
  { topic: "Literature", title: "The Western Wind", author: "Samantha Harvey" },
  { topic: "Literature", title: "Death Comes to Pemberley", author: "P. D. James", note: "Knopf" },
  { topic: "Literature", title: "The Love Songs of W.E.B. Du Bois", author: "Honorée Fanonne Jeffers" },
  { topic: "Literature", title: "Finnegans Wake", author: "James Joyce" },
  { topic: "Literature", title: "Ulysses", author: "James Joyce" },
  { topic: "Literature", title: "Missoula", author: "Jon Krakauer", note: "Anchor" },
  { topic: "Literature", title: "Empire of the Stars", author: "Arthur I. Miller", note: "Houghton Mifflin" },
  { topic: "Literature", title: "The One Plus One", author: "Jojo Moyes" },
  { topic: "Literature", title: "This Time Tomorrow", author: "Emma Straub", note: "Riverhead" },
  { topic: "Literature", title: "Anna Karenina", author: "Leo Tolstoy" },
  { topic: "Literature", title: "War and Peace", author: "Leo Tolstoy" },

  // Sets
  { topic: "Sets", title: "The Harvard Classics", author: "Charles W. Eliot, ed.", note: "51 vols." },
  { topic: "Sets", title: "Great Books of the Western World", author: "Robert Maynard Hutchins, ed.", note: "54 vols., Britannica" },
];
