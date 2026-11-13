'use client';

import { useEffect, useRef, useState } from 'react';
import profile from '@/data/profile.json';

export default function CopyEmail() {
  const [status, setStatus] = useState('Copy email');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('Copied');
    } catch {
      setStatus('Select the address to copy');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('Copy email'), 2500);
  };
  return (
    <div className="p-copy-row">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <button type="button" className="p-copy" onClick={copy}>
        <span aria-live="polite">{status}</span>
      </button>
    </div>
  );
}
