import { describe, expect, it } from 'vitest';
import { BIRTH_INSTANT, decimalAgeAt, formatLiveAge } from '../age';

describe('live age', () => {
  it('uses the confirmed IST birth instant independently of host timezone', () => {
    expect(new Date(BIRTH_INSTANT).toISOString()).toBe(
      '1999-08-06T01:24:00.000Z',
    );
    expect(formatLiveAge(Date.parse('2026-08-06T01:24:00Z'))).toBe(
      '27.00000000000',
    );
  });
  it('uses the real interval between birthdays, including leap years', () => {
    const start = Date.parse('2023-08-06T01:24:00Z');
    const end = Date.parse('2024-08-06T01:24:00Z');
    expect(decimalAgeAt((start + end) / 2)).toBe(24.5);
    expect(formatLiveAge((start + end) / 2)).toBe('24.50000000000');
  });
  it('does not show the next birthday early due to decimal rounding', () => {
    const birthday = Date.parse('2026-08-06T01:24:00Z');
    expect(formatLiveAge(birthday - 1)).toBe('26.99999999996');
    expect(formatLiveAge(birthday)).toBe('27.00000000000');
  });
  it('has enough precision for successive milliseconds to change the display', () => {
    const now = Date.parse('2026-11-14T00:00:00Z');
    expect(formatLiveAge(now)).toMatch(/^\d+\.\d{11}$/);
    expect(formatLiveAge(now + 1)).not.toBe(formatLiveAge(now));
  });
  it('returns zero at or before birth', () => {
    expect(formatLiveAge(Date.parse(BIRTH_INSTANT))).toBe('0.00000000000');
    expect(formatLiveAge(Date.parse(BIRTH_INSTANT) - 1)).toBe('0.00000000000');
  });
});
