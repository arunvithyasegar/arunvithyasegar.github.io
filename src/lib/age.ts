/** Owner-confirmed birth instant: 6 August 1999, 06:54 IST (01:24 UTC). */
export const BIRTH_INSTANT = '1999-08-06T06:54:00+05:30';
const birth = new Date(BIRTH_INSTANT);

/** Calendar years plus the elapsed fraction between consecutive birthdays. */
export function decimalAgeAt(now: number): number {
  if (now <= birth.getTime()) return 0;
  let year = new Date(now).getUTCFullYear();
  const anniversary = (value: number) => {
    const date = new Date(birth.getTime());
    date.setUTCFullYear(value);
    return date.getTime();
  };
  if (now < anniversary(year)) year -= 1;
  const start = anniversary(year);
  return (
    year -
    birth.getUTCFullYear() +
    (now - start) / (anniversary(year + 1) - start)
  );
}

/** Truncate so the display never reaches the next age before the birthday. */
export const LIVE_AGE_DECIMALS = 11;

export function formatLiveAge(now: number): string {
  const scale = 10 ** LIVE_AGE_DECIMALS;
  return (Math.floor(decimalAgeAt(now) * scale) / scale).toFixed(
    LIVE_AGE_DECIMALS,
  );
}
