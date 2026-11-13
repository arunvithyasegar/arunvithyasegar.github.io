import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '../page';

describe('portfolio homepage', () => {
  it('leads with the work and a friendly contact invitation', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('link', { name: 'Explore my work' }),
    ).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Say hello' })).toHaveAttribute(
      'href',
      '/contact',
    );
  });
  it('takes public work examples directly to the work, in a new tab', () => {
    render(<HomePage />);
    const example = screen.getByRole('link', {
      name: /News Sentiment Analysis using NLP/,
    });
    expect(example).toHaveAttribute(
      'href',
      'https://newssentimentanalysis.streamlit.app/',
    );
    expect(example).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
