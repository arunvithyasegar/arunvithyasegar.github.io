import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContentGuard from '../../Template/ContentGuard';

describe('content interaction controls', () => {
  it('blocks casual copying and selection on page content', () => {
    render(
      <>
        <ContentGuard />
        <p>Public page content</p>
      </>,
    );
    const text = screen.getByText('Public page content');
    for (const type of [
      'contextmenu',
      'copy',
      'cut',
      'selectstart',
      'dragstart',
    ]) {
      expect(
        text.dispatchEvent(
          new Event(type, { bubbles: true, cancelable: true }),
        ),
      ).toBe(false);
    }
    expect(fireEvent.keyDown(text, { key: 'c', ctrlKey: true })).toBe(false);
    expect(fireEvent.keyDown(text, { key: 'a', metaKey: true })).toBe(false);
  });
  it('preserves editable fields and normal keyboard navigation', () => {
    render(
      <>
        <ContentGuard />
        <input aria-label="Your message" />
        <a href="/contact/">Contact</a>
      </>,
    );
    const field = screen.getByRole('textbox');
    expect(fireEvent.copy(field)).toBe(true);
    expect(fireEvent.keyDown(field, { key: 'a', ctrlKey: true })).toBe(true);
    expect(fireEvent.keyDown(screen.getByRole('link'), { key: 'Tab' })).toBe(
      true,
    );
  });
  it('removes document listeners on unmount', () => {
    const { unmount } = render(<ContentGuard />);
    unmount();
    expect(
      document.dispatchEvent(new Event('copy', { cancelable: true })),
    ).toBe(true);
  });
});
