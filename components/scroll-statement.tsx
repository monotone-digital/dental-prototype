'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

function Word({ word, index, count, progress }: { word: string; index: number; count: number; progress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const opacity = useTransform(progress, [index / count, (index + 1) / count], [0.22, 1]);
  const y = useTransform(progress, [index / count, (index + 1) / count], [12, 0]);
  return <motion.span style={{ opacity: reduced ? 1 : opacity, y: reduced ? 0 : y }} className="mr-[.22em] inline-block">{word}</motion.span>;
}

export function ScrollStatement() {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = 'Healthy teeth. Comfortable care. More reasons to smile.'.split(' ');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'end 45%'] });
  return <h2 ref={ref} aria-label="Healthy teeth. Comfortable care. More reasons to smile." className="max-w-[790px] font-serif text-[38px] leading-[1.18] tracking-[-1.4px] md:text-[57px]">
    <span aria-hidden="true">{words.map((word, index) => <Word key={index} word={word} index={index} count={words.length} progress={scrollYProgress} />)}</span>
  </h2>;
}

export function ClosingHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const x = useTransform(scrollYProgress, [0, 1], [-75, 0]);
  const secondX = useTransform(scrollYProgress, [0, 1], [90, 0]);
  return <h2 ref={ref} className="mt-6 font-serif text-[64px] leading-[.97] tracking-[-2px] md:text-[104px]">
    <motion.span style={{ x: reduced ? 0 : x }} className="block">Let’s begin</motion.span>
    <motion.span style={{ x: reduced ? 0 : secondX }} className="block">with <em className="font-normal text-[#d3d1b9]">you.</em></motion.span>
  </h2>;
}
