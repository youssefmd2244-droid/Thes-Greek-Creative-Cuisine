import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'hidden' | 'visible' | 'exited'>('hidden');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
        } else {
          if (entry.boundingClientRect.top < 0) {
            setState('exited');
          } else {
            setState('hidden');
          }
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, state };
}
