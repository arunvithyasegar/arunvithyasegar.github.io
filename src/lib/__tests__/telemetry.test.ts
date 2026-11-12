import { describe, expect, it } from 'vitest';
import { utcDate } from '../telemetry';

describe('utcDate', () => {
  it('does not depend on the build host timezone', () => {
    expect(utcDate(Date.UTC(2026, 6, 28, 23, 59))).toBe('2026-07-28');
    expect(utcDate(Date.UTC(2026, 6, 29, 0, 1))).toBe('2026-07-29');
  });
});
