import { describe, expect, it } from 'vitest';

import {
  compareWritingItems,
  getWritingItems,
  type WritingItem,
} from '../writing';

describe('getWritingItems', () => {
  it('starts without the template author’s writing', () => {
    expect(getWritingItems()).toEqual([]);
  });

  it('orders equal and undated entries deterministically', () => {
    const item = (
      title: string,
      date: string,
      url = `https://example.com/${title.toLowerCase()}`,
    ): WritingItem => ({
      title,
      date,
      url,
      description: '',
      isExternal: true,
      source: 'Example',
    });

    expect(
      [item('Zulu', ''), item('Alpha', '')].sort(compareWritingItems),
    ).toEqual([item('Alpha', ''), item('Zulu', '')]);
    expect(
      [item('Zulu', '2026-01-01'), item('Alpha', '2026-01-01')].sort(
        compareWritingItems,
      ),
    ).toEqual([item('Alpha', '2026-01-01'), item('Zulu', '2026-01-01')]);
  });
});
