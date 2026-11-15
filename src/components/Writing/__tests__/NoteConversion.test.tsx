import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import NoteConversion, { Newsletter } from '../NoteConversion';

vi.mock('@/data/conversion', () => ({
  NEWSLETTER_ACTION_URL: '',
  NEWSLETTER_EMAIL_FIELD: 'subscriber_email',
  NEWSLETTER_HIDDEN_FIELDS: { list_id: 'public-list-id' },
  WRITING_TEMPLATES: { 'with-template': '/downloads/framework.pdf' },
}));

describe('note conversion', () => {
  it('does not collect email before a provider is configured', () => {
    const { container } = render(<Newsletter actionUrl="" />);
    expect(container.querySelector('form')).toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();
  });

  it('posts a labelled, required email field to the configured provider', () => {
    const { container } = render(
      <Newsletter actionUrl="https://example.com/subscribe" />,
    );
    expect(container.querySelector('form')).toHaveAttribute(
      'action',
      'https://example.com/subscribe',
    );
    expect(container.querySelector('form')).toHaveAttribute('method', 'post');
    expect(
      screen.getByRole('textbox', { name: 'Email address' }),
    ).toHaveAttribute('name', 'subscriber_email');
    expect(container.querySelector('input[name="list_id"]')).toHaveValue(
      'public-list-id',
    );
    expect(
      screen.getByRole('textbox', { name: 'Email address' }),
    ).toBeRequired();
  });

  it('hides empty template slots and enables a configured download', () => {
    const { rerender } = render(<NoteConversion slug="without-template" />);
    expect(
      screen.queryByRole('link', { name: 'Download template' }),
    ).toBeNull();
    rerender(<NoteConversion slug="with-template" />);
    expect(
      screen.getByRole('link', { name: 'Download template' }),
    ).toHaveAttribute('href', '/downloads/framework.pdf');
    expect(
      screen.getByRole('link', { name: 'Download template' }),
    ).toHaveAttribute('download');
  });
});
