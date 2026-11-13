'use client';

import { useEffect } from 'react';

/** Casual-copy deterrence only; public HTML remains accessible to crawlers. */
export default function ContentGuard() {
  useEffect(() => {
    const editable = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest('input, textarea, [contenteditable="true"]'));
    const block = (event: Event) => {
      if (!editable(event.target)) event.preventDefault();
    };
    const shortcut = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        ['a', 'c', 'x'].includes(event.key.toLowerCase())
      )
        block(event);
    };
    const events = ['contextmenu', 'copy', 'cut', 'selectstart', 'dragstart'];
    events.forEach((name) => document.addEventListener(name, block));
    document.addEventListener('keydown', shortcut);
    return () => {
      events.forEach((name) => document.removeEventListener(name, block));
      document.removeEventListener('keydown', shortcut);
    };
  }, []);
  return null;
}
