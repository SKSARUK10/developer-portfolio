import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/animations';

const SELECTOR = 'a, button, [data-cursor-label], input[type="submit"], input[type="button"]';
const TEXT_SELECTOR = 'input[type="text"], input[type="email"], input[type="tel"], input[type="search"], input[type="url"], input[type="password"], textarea, [contenteditable]';

function getDefaultLabel(el: Element): string {
  if (el.closest('[data-cursor-label]')) return '';
  if (el.tagName === 'A') return 'click()';
  if (el.tagName === 'BUTTON') return 'click()';
  return 'click()';
}

export default function InspectorCursor() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 30 });

  const boxX = useMotionValue(0);
  const boxY = useMotionValue(0);
  const boxW = useMotionValue(16);
  const boxH = useMotionValue(16);
  const boxXSpring = useSpring(boxX, { stiffness: 300, damping: 25 });
  const boxYSpring = useSpring(boxY, { stiffness: 300, damping: 25 });
  const boxWSpring = useSpring(boxW, { stiffness: 300, damping: 25 });
  const boxHSpring = useSpring(boxH, { stiffness: 300, damping: 25 });

  const bracketSize = 10;
  const strokeW = 1.5;
  // Idle reticle SVG size
  const idleSize = bracketSize * 2;   // 20x20

  const isHovering = useMotionValue(0);
  const fillOpacity = useTransform(isHovering, [0, 1], [0, 0.05]);

  // (a) is cursor visible/positioned — true after first mousemove, independent of hover
  const idleOpacity = useMotionValue(0);
  const idleOpacitySpring = useSpring(idleOpacity, { stiffness: 400, damping: 25 });
  // Idle dashed reticle cross-fades out when hovering (1 -> 0)
  const idleHoverFade = useTransform(isHovering, [0, 1], [1, 0]);
  const idleCombinedOpacity = useTransform(
    [idleOpacitySpring, idleHoverFade],
    ([a, b]: number[]) => (a as number) * (b as number)
  );

  const labelOpacity = useMotionValue(0);
  const labelY = useMotionValue(4);
  const labelOpacitySpring = useSpring(labelOpacity, { stiffness: 400, damping: 25 });
  const labelYSpring = useSpring(labelY, { stiffness: 400, damping: 25 });
  const labelTop = useTransform(boxYSpring, (v) => v - 18);

  const labelRef = useRef<HTMLDivElement>(null);
  const currentLabel = useRef('');
  const currentTarget = useRef<Element | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    // set visible on very first mousemove — independent of hover state (b)
    if (idleOpacity.get() === 0) {
      idleOpacity.set(1);
    }
  }, [cursorX, cursorY, idleOpacity]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = (e.target as Element).closest(SELECTOR);
    const textTarget = (e.target as Element).closest(TEXT_SELECTOR);

    if (textTarget) {
      if (containerRef.current) containerRef.current.style.cursor = 'text';
    } else if (containerRef.current) {
      containerRef.current.style.cursor = 'none';
    }

    if (!target || target === currentTarget.current) return;
    currentTarget.current = target;

    const rect = target.getBoundingClientRect();
    boxX.set(rect.left);
    boxY.set(rect.top);
    boxW.set(rect.width);
    boxH.set(rect.height);
    isHovering.set(1);

    const rawLabel = target.getAttribute('data-cursor-label') || getDefaultLabel(target);
    currentLabel.current = rawLabel;
    if (labelRef.current) {
      labelRef.current.textContent = rawLabel;
    }
    labelOpacity.set(1);
    labelY.set(0);
  }, [boxX, boxY, boxW, boxH, isHovering, labelOpacity, labelY]);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const related = e.relatedTarget as Element | null;
    if (related && related.closest && related.closest(SELECTOR)) return;

    currentTarget.current = null;
    isHovering.set(0);
    labelOpacity.set(0);
    labelY.set(4);
  }, [isHovering, labelOpacity, labelY]);

  useEffect(() => {
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hoverMq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!hoverMq.matches || reducedMq.matches) return;

    document.documentElement.classList.add('inspector-active');
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.documentElement.classList.remove('inspector-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  const strokeColor = 'var(--cursor-color, #3392fb)';

  if (reduced) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] cursor-none"
      style={{ cursor: 'none' }}
      aria-hidden="true"
    >
      {/* Dashed slowly-rotating reticle - idle state tracking cursor */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: idleCombinedOpacity,
        }}
      >
        <motion.svg
          width={idleSize}
          height={idleSize}
          viewBox="0 0 20 20"
          className="overflow-visible"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        >
          <rect
            x="2"
            y="2"
            width="16"
            height="16"
            rx="1"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeW}
            strokeDasharray="4 3"
          />
        </motion.svg>
      </motion.div>

      {/* Hover bracket overlay - snaps to element bounding box */}
      <motion.div
        className="absolute top-0 left-0"
        style={{
          x: boxXSpring,
          y: boxYSpring,
          width: boxWSpring,
          height: boxHSpring,
          opacity: isHovering,
        }}
      >
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
          {/* Fill */}
          <motion.div
            className="absolute inset-0 rounded-sm"
            style={{
              backgroundColor: strokeColor,
              opacity: fillOpacity as unknown as number,
            }}
          />
          {/* Top-left bracket */}
          <div className="absolute top-0 left-0" style={{ width: bracketSize, height: bracketSize }}>
            <div className="absolute top-0 left-0 h-[1.5px] bg-current" style={{ width: bracketSize, color: strokeColor }} />
            <div className="absolute top-0 left-0 w-[1.5px] bg-current" style={{ height: bracketSize, color: strokeColor }} />
          </div>
          {/* Top-right bracket */}
          <div className="absolute top-0 right-0" style={{ width: bracketSize, height: bracketSize }}>
            <div className="absolute top-0 right-0 h-[1.5px] bg-current" style={{ width: bracketSize, color: strokeColor }} />
            <div className="absolute top-0 right-0 w-[1.5px] bg-current" style={{ height: bracketSize, color: strokeColor }} />
          </div>
          {/* Bottom-left bracket */}
          <div className="absolute bottom-0 left-0" style={{ width: bracketSize, height: bracketSize }}>
            <div className="absolute bottom-0 left-0 h-[1.5px] bg-current" style={{ width: bracketSize, color: strokeColor }} />
            <div className="absolute bottom-0 left-0 w-[1.5px] bg-current" style={{ height: bracketSize, color: strokeColor }} />
          </div>
          {/* Bottom-right bracket */}
          <div className="absolute bottom-0 right-0" style={{ width: bracketSize, height: bracketSize }}>
            <div className="absolute bottom-0 right-0 h-[1.5px] bg-current" style={{ width: bracketSize, color: strokeColor }} />
            <div className="absolute bottom-0 right-0 w-[1.5px] bg-current" style={{ height: bracketSize, color: strokeColor }} />
          </div>
        </div>
      </motion.div>

      {/* Contextual label */}
      <motion.div
        ref={labelRef}
        className="absolute top-0 left-0 font-mono text-[10px] tracking-wide pointer-events-none select-none whitespace-nowrap bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-1.5 py-0.5 rounded"
        style={{
          x: boxXSpring,
          y: labelTop,
          opacity: labelOpacitySpring,
          translateY: labelYSpring,
        }}
      />
    </div>
  );
}
