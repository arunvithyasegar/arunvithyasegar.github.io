'use client';

import { useEffect, useRef, useState } from 'react';
import { formatLiveAge } from '@/lib/age';

const clock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export default function LiveAge({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(false);
  const ageRef = useRef<HTMLSpanElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (paused) {
      if (clockRef.current)
        clockRef.current.textContent =
          clockRef.current.textContent?.replace(/^Live/, 'Paused') ?? '';
      return;
    }
    let frame: number | undefined;
    let timer: ReturnType<typeof setInterval> | undefined;
    let lastSecond: number | undefined;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const update = () => {
      const now = Date.now();
      const age = formatLiveAge(now);
      if (ageRef.current && ageRef.current.textContent !== age)
        ageRef.current.textContent = age;
      const second = Math.floor(now / 1000);
      if (clockRef.current && second !== lastSecond) {
        clockRef.current.textContent = `${paused ? 'Paused' : 'Live'} · ${clock.format(now)} IST`;
        lastSecond = second;
      }
    };
    const stop = () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      if (timer !== undefined) clearInterval(timer);
    };
    const animate = () => {
      update();
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      stop();
      if (document.hidden) return;
      update();
      if (!reduced?.matches && typeof requestAnimationFrame === 'function')
        frame = requestAnimationFrame(animate);
      else timer = setInterval(update, 1000);
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    reduced?.addEventListener('change', sync);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', sync);
      reduced?.removeEventListener('change', sync);
    };
  }, [paused]);
  return (
    <div
      className={`live-age${compact ? ' live-age--compact' : ''}`}
      aria-label="Live age"
    >
      <p className="live-age-label">Years of curiosity</p>
      <p className="live-age-number" aria-live="off">
        <span ref={ageRef}>––.–––––––––––</span>
        <span className="live-age-unit">years</span>
      </p>
      <p className="live-age-clock" aria-live="off">
        <span className="live-age-dot" aria-hidden="true" />
        <span ref={clockRef}>Synchronising clock</span>
      </p>
      {!compact && (
        <>
          <div className="live-age-controls">
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? 'Resume live display' : 'Pause display'}
            </button>
            <span aria-live="polite">
              {paused
                ? 'Paused for this visit'
                : 'Runs live while this tab is visible'}
            </span>
          </div>
          <p className="live-age-explainer">
            Eleven decimal places, refreshed with your screen. This is a live
            clock display, not a microsecond-precision measurement.
          </p>
        </>
      )}
    </div>
  );
}
