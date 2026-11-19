import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '../page';

describe('portfolio homepage', () => {
  it('offers work, resume and contact actions for employers', () => {
    const { container } = render(<HomePage />);
    expect(screen.getByRole('link', { name: 'View My Work' })).toHaveAttribute(
      'href',
      '/projects',
    );
    expect(
      screen.getByRole('link', { name: 'Download Resume' }),
    ).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute(
      'href',
      '/contact',
    );
    expect(container.textContent).not.toMatch(
      /Book a|Starting from|freelance|project brief|₹/i,
    );
    expect(
      container.querySelector('script[type="application/ld+json"]')
        ?.textContent,
    ).not.toContain('ProfessionalService');
  });
  it('takes public work examples directly to the work, in a new tab', () => {
    render(<HomePage />);
    const example = screen.getByRole('link', {
      name: /Open News Sentiment Analysis using NLP dashboard/,
    });
    expect(example).toHaveAttribute(
      'href',
      'https://newssentimentanalysis.streamlit.app/',
    );
    expect(example).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
