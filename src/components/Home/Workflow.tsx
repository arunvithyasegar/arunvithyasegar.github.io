'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

const steps = [
  {
    phase: 'Question / Understand',
    label: 'Define the real question',
    example: 'Which growth lever should we prioritise this quarter?',
  },
  {
    phase: 'Evidence / Investigate',
    label: 'Bring the right evidence',
    example: 'Cohorts, funnel data, market signals, unit economics.',
  },
  {
    phase: 'Insight / Make useful',
    label: 'Turn it into a decision',
    example: 'A recommendation, a trade-off, and a clear next action.',
  },
  {
    phase: 'Decision / Act',
    label: 'Move forward with clarity',
    example: 'A decision, owner, metric, and next review point.',
  },
];
export default function Workflow() {
  const ref = useRef<HTMLOListElement>(null);
  const [run, setRun] = useState(0);
  const [visible, setVisible] = useState(4);
  useEffect(() => {
    if (
      typeof window.matchMedia !== 'function' ||
      typeof IntersectionObserver !== 'function'
    )
      return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches || !ref.current) return;
    let timers: ReturnType<typeof setTimeout>[] = [];
    const play = () => {
      setVisible(0);
      timers = steps.map((_, index) =>
        setTimeout(() => setVisible(index + 1), index * 180 + 50),
      );
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    const motionChanged = () => {
      timers.forEach(clearTimeout);
      setVisible(4);
      observer.disconnect();
    };
    reduced.addEventListener('change', motionChanged);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      reduced.removeEventListener('change', motionChanged);
    };
  }, [run]);
  return (
    <section className="p-section" aria-labelledby="home-approach">
      <div className="p-section-head">
        <div>
          <p className="p-section-num">04 / The approach</p>
          <h2 id="home-approach">From a question to a useful next step.</h2>
        </div>
      </div>
      <ol
        className="p-workflow"
        ref={ref}
        style={
          {
            '--workflow-progress': Math.max(0, visible - 1) / 3,
          } as CSSProperties
        }
      >
        {steps.map((step, index) => (
          <li
            key={step.phase}
            className={`p-stage ${visible > index ? 'is-current' : ''}`}
          >
            <span className="p-node" aria-hidden="true">
              0{index + 1}
            </span>
            <p className="p-step-label">{step.phase}</p>
            <h3>{step.label}</h3>
            <p>{step.example}</p>
          </li>
        ))}
      </ol>
      <div className="p-workflow-foot">
        <p>The output is not a chart. It is a better next decision.</p>
        <button
          type="button"
          className="p-replay"
          onClick={() => setRun((value) => value + 1)}
        >
          Replay the approach <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
