'use client';

import useActiveSection from '@/hooks/useActiveSection';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'selected-work', label: 'Work' },
  { id: 'latest-writing', label: 'Writing' },
  { id: 'conversation', label: 'Connect' },
] as const;

export default function SectionRail() {
  // A side rail never obscures content, so only section scroll margins determine
  // the arrival line; it deliberately does not supply the sticky-bar navRef.
  const { activeId, onLinkClick } = useActiveSection(
    sections.map(({ id }) => id),
  );
  return (
    <nav className="p-section-rail" aria-label="On this page">
      {sections.map(({ id, label }, index) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={onLinkClick}
          aria-current={activeId === id ? 'location' : undefined}
        >
          <span aria-hidden="true">0{index + 1}</span> {label}
        </a>
      ))}
    </nav>
  );
}
