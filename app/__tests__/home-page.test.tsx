import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '../page';

describe('consulting homepage', () => {
  it('routes a potential client to the brief and the right service', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('link', { name: 'Discuss your project' }),
    ).toHaveAttribute('href', '/contact');
    expect(
      screen.getByRole('link', { name: /Retention.*growth models/ }),
    ).toHaveAttribute('href', '/services#retention');
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
