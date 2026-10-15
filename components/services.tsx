'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Everyday dental care', subtitle: 'A healthy foundation', image: '/images/dental-checkup.webp', alt: 'Illustrative dental examination mirror and probe beside a porcelain tooth', tag: 'CHECKUPS & PREVENTION', detail: 'Make a little space for your dental health. Start with a checkup, keep your teeth feeling fresh with scaling and polishing, or discuss a filling for a tooth that needs attention. We explain your options and help you plan the next step.', note: 'Checkups · Scaling and polishing · Fillings' },
  { title: 'Repair & restore', subtitle: 'Comfort in every smile', image: '/images/hero.webp', alt: 'Illustrative porcelain tooth sculpture wrapped in blush silk', tag: 'RESTORATIVE DENTISTRY', detail: 'From root canals and extractions to replacing missing teeth, explore care that supports everyday comfort and function. Discuss crowns and bridges, dentures, or dental implants with your dentist and find out which options suit your needs.', note: 'Root canals · Extractions · Crowns and bridges · Dentures · Implants' },
  { title: 'Braces & alignment', subtitle: 'A step towards balance', image: '/images/dental-braces.webp', alt: 'Illustrative dental model with silver orthodontic braces on a stone plinth', tag: 'ORTHODONTIC CARE', detail: 'Explore braces with a consultation focused on your teeth, bite, and smile goals. Your dentist will walk you through the treatment plan, expected timeline, review appointments, and caring for your teeth throughout the process.', note: 'Braces · Bite assessment · Treatment planning' },
  { title: 'Teeth whitening', subtitle: 'Let your smile shine', image: '/images/dental-whitening.webp', alt: 'Illustrative dental shade guide beside a white porcelain tooth', tag: 'SMILE CONFIDENCE', detail: 'Talk to us about professional teeth whitening and the shade you would like to achieve. Begin with a dental assessment, then discuss suitability, sensitivity, expected results, and how to care for your smile after treatment.', note: 'Teeth whitening · Shade consultation · Aftercare' },
];

function ServiceCard({ service, index, selected, onSelect }: { service: typeof services[number]; index: number; selected: boolean; onSelect: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  return <motion.div ref={ref} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 100, rotate: reduced ? 0 : index % 2 ? 3 : -3 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .95, delay: index * .08, ease: [.22, 1, .36, 1] }} className={index % 2 ? 'md:mt-16' : ''}>
    <button id={`service-${index}`} onClick={onSelect} aria-pressed={selected} aria-controls="service-detail" className="group block w-full text-left focus-visible:outline-[#d3d1b9]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-[#d5d0c5]">
        <motion.img style={{ y: reduced ? 0 : imageY }} src={service.image} alt={service.alt} loading="lazy" className={`absolute -top-[8%] h-[116%] w-full object-cover transition-[filter] duration-700 ${selected ? 'saturate-100' : 'saturate-[.7] group-hover:saturate-100'} ${index === 1 ? 'object-[56%_50%]' : ''}`} />
        <div className="absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/30" />
        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-black/5 px-3 py-1.5 text-[10px] text-white backdrop-blur-sm">0{index + 1}</span>
        <span className="absolute bottom-5 left-4 text-[8px] tracking-[.2em] text-white sm:left-5">{service.tag}</span>
        <span className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${selected ? 'rotate-45 bg-cream text-ink' : 'bg-cream/15 text-white backdrop-blur-sm group-hover:rotate-45 group-hover:bg-cream group-hover:text-ink'}`}><ArrowUpRight size={19} strokeWidth={1.4}/></span>
      </div>
      <div className={`mt-4 border-b pb-5 transition-colors ${selected ? 'border-[#d3d1b9]' : 'border-cream/20'}`}><h3 className="font-serif text-[23px] leading-[1.1] lg:text-[28px]">{service.title}</h3><p className="mt-2 text-[10px] text-cream/50">{service.subtitle}</p><p className="mt-3 text-[10px] leading-[1.8] text-cream/70">{service.note}</p></div>
    </button>
  </motion.div>;
}

export function Services({ onBook }: { onBook: () => void }) {
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [50, -45]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-40, 110]);
  return <section id="services" ref={ref} className="relative overflow-hidden bg-[#26382f] px-6 py-16 text-cream md:px-12 md:py-20 lg:px-16">
    <div className="mx-auto max-w-[1312px]">
      <div className="flex items-center justify-between border-b border-cream/20 pb-5"><span className="flex items-center gap-3 text-[10px] uppercase tracking-[.2em]"><span className="h-1.5 w-1.5 rounded-full bg-[#d3d1b9]"/> Our services</span><span className="text-[9px] tracking-[.16em] text-cream/50">01 — 04</span></div>
      <div className="relative mb-12 mt-9 flex items-end justify-between gap-6 md:mb-16">
        <h2 className="font-serif text-[clamp(48px,7.4vw,110px)] leading-[.98] tracking-[-.04em]">Care in<br/><motion.em style={{ x: reduced ? 0 : titleX }} className="block font-normal text-[#d3d1b9]">every detail.</motion.em></h2>
        <div className="hidden max-w-[240px] pb-3 md:block"><motion.span aria-hidden="true" style={{ rotate: reduced ? 0 : rotate }} className="mb-6 block w-fit font-serif text-7xl text-[#d3d1b9]">✳</motion.span><p className="text-[12px] leading-[1.85] text-cream/65">From your regular checkup to a more confident smile. Dental care for every stage, all in one place.</p></div>
      </div>
      <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 md:grid-cols-4 md:gap-5 lg:gap-7">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} selected={selected === index} onSelect={() => setSelected(index)} />)}</div>
      <div id="service-detail" role="region" aria-labelledby={`service-${selected}`} className="mt-9 min-h-[230px] border-b border-cream/20 pb-7 md:mt-10 md:min-h-[145px]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}><motion.div key={selected} initial={{ opacity: 0, y: reduced ? 0 : 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -10 }} transition={{ duration: .22 }} className="grid gap-5 md:grid-cols-[1fr_1.5fr_1fr] md:gap-9">
          <div><span className="text-[9px] uppercase tracking-[.15em] text-[#d3d1b9]">A closer look / 0{selected + 1}</span><p className="mt-3 text-[11px] text-cream/60">{services[selected].note}</p></div>
          <p className="max-w-[540px] text-[12px] leading-[1.85] text-cream/75">{services[selected].detail}</p>
          <button onClick={onBook} className="group flex h-fit items-center justify-between gap-5 rounded-full border border-cream/35 px-5 py-3.5 text-[11px] transition-colors hover:bg-cream hover:text-ink">Let’s talk about your care <ArrowUpRight size={16}/></button>
        </motion.div></AnimatePresence>
      </div>
      <div className="mt-5 flex items-center justify-between gap-6 text-[9px] text-cream/45"><span>Select a service to explore your next step.</span><a href="#visit" className="flex items-center gap-2 text-cream/70">Not sure where to begin? <ArrowRight size={12}/></a></div>
    </div>
  </section>;
}
