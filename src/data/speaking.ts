/** Public sessions are listed only when the owner supplies a verifiable record. */
export type AppearanceFormat = 'Panel' | 'Arsenal Lab' | 'Tech session';

export interface Appearance {
  /**
   * The session's own title, or the event's name when the session was a demo
   * of a tool or its host published no title.
   */
  title: string;
  format: AppearanceFormat;
  /** First day of the appearance, or of its event when no day is published. */
  date: string;
  /** City, as a reader would place the event. */
  place: string;
  /** What the title and format leave out: the host, the event, who else. */
  desc: string;
  /** The organiser's own record of the session, naming Arun. */
  link: string;
}

const appearances: Appearance[] = [];
export function getAppearances(): Appearance[] {
  return [...appearances].sort((a, b) => b.date.localeCompare(a.date));
}
