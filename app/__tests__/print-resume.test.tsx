import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import certifications from '@/data/resume/certifications';
import work from '@/data/resume/work';
import ResumePage from '../resume/page';

describe('Arun resume', () => {
  it('renders every source role and credential with print and JSON actions', () => {
    render(<ResumePage />);
    for (const role of work)
      expect(screen.getAllByText(role.name).length).toBeGreaterThan(0);
    for (const cert of certifications)
      expect(
        screen.getByRole('link', {
          name: new RegExp(cert.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
        }),
      ).toHaveAttribute('href', cert.url);
    expect(screen.getByRole('link', { name: 'JSON Resume' })).toHaveAttribute(
      'href',
      '../resume.json',
    );
  });
});
