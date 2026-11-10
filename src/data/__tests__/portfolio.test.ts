import { describe, expect, it } from 'vitest';
import { buildJsonResume } from '@/lib/resumeJson';
import profile from '../profile.json';
import projects from '../projects';
import certifications from '../resume/certifications';
import work from '../resume/work';

describe('portfolio migration', () => {
  it('preserves Arun’s portfolio inventory and credential destinations', () => {
    expect(profile.name).toBe('Arun V');
    expect(work).toHaveLength(4);
    expect(projects).toHaveLength(6);
    expect(certifications).toHaveLength(8);
    const resume = buildJsonResume();
    expect(resume.certificates.map((c) => c.url)).toEqual(
      certifications.map((c) => c.url),
    );
    expect(projects.filter((p) => p.dashboard)).toHaveLength(2);
    expect(
      JSON.stringify({ profile, projects, work, certifications }),
    ).not.toMatch(/mldangelo|Michael D'Angelo|Promptfoo|Stanford/);
  });
});
