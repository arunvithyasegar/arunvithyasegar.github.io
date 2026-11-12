/** Facts used for public site diagnostics. */
/** Format an instant as a host-timezone-independent UTC date. */
export function utcDate(at: number): string {
  return new Date(at).toISOString().slice(0, 10);
}

/**
 * The repository this site is built from. The GitHub readings on `/stats`
 * describe it and its rows link into it, so a fork changes
 * this one constant.
 */
export const SOURCE_REPOSITORY = 'arunvithyasegar/arunvithyasegar.github.io';
