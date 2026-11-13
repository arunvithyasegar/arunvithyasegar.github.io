'use client';

import { useEffect, useState } from 'react';
import { BIRTH_INSTANT, formatLiveAge } from '@/lib/age';

const clock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export default function LiveAge({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      if (timer) clearInterval(timer);
      if (!document.hidden) {
        setNow(Date.now());
        timer = setInterval(() => setNow(Date.now()), 1000);
      }
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);
  return (
    <div
      className={`live-age${compact ? ' live-age--compact' : ''}`}
      aria-label="Live age"
    >
      <p className="live-age-label">Years of curiosity</p>
      <p className="live-age-number" aria-live="off">
        <span>{now === null ? '––.–––––' : formatLiveAge(now)}</span>
        <span className="live-age-unit">years</span>
      </p>
      <p className="live-age-clock" aria-live="off">
        <span className="live-age-dot" aria-hidden="true" />
        {now === null
          ? 'Synchronising clock'
          : `Live · ${clock.format(now)} IST`}
      </p>
      {!compact && (
        <>
          <p className="live-age-origin">
            Since{' '}
            <time dateTime={BIRTH_INSTANT}>6 August 1999 · 6:54 AM IST</time>
          </p>
          <p className="live-age-explainer">
            A little more life, every second. Five decimal places; the last
            digit advances roughly every five minutes.
          </p>
        </>
      )}
    </div>
  );
}
