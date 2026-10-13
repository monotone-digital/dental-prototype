'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Services } from '@/components/services';
import { ScrollStatement, ClosingHeading } from '@/components/scroll-statement';
import { ArrowUpRight, ArrowRight, ArrowDown, X, Menu, Phone, MapPin, Star, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const maps = 'https://www.google.com/maps/search/?api=1&query=Renew+Skin+%26+Dental+Clinic+616%2FC+Gulgasht+Multan';
const reviews = [
  { name: 'Hashmi Packages', initials: 'HP', treatment: 'Laser treatment', quote: 'Dr Qurat ul Ain did my laser treatment, She is very experienced friendly and very understanding … I Found the whole staff very professional and well experienced . Totally Recommended !' },
  { name: 'fahim iqbal', initials: 'FI', treatment: 'Skin care', quote: 'It’s a really good treatment to do before an event because it leaves your skin glowing and healthy. … my overall skin health is improved for several weeks to a month.' },
  { name: 'M Bila Joiya', initials: 'MJ', treatment: 'Skin care', quote: 'Renew Aesthetics Gulgasht Multan is the best for advanced skin care.' },
];

function Reveal({children, className = ''}:{children:React.ReactNode;className?:string}) {
  const reduced = useReducedMotion();
  return <motion.div initial={{opacity:reduced ? 1 : 0,y:reduced ? 0 : 55}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:.9,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>;
}
function Eyebrow({children,light=false}:{children:React.ReactNode;light?:boolean}) { return <div className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.2em] ${light?'text-cream/60':'text-ink/55'}`}><span className={`h-1.5 w-1.5 rounded-full ${light?'bg-cream/60':'bg-olive'}`}/>{children}</div>; }
function Brand({light=false}:{light?:boolean}) {return <a href="#home" aria-label="Renew home" className={`flex items-center gap-3 ${light?'text-cream':'text-plum'}`}><span className="font-serif text-[41px] leading-none tracking-[-3px]">renew<span className="align-top text-[19px] leading-6">✳</span></span><span className="border-l border-current/20 pl-3 text-[8px] font-medium uppercase leading-[1.6] tracking-[.18em]">Skin & Dental<br/>Clinic</span></a>;}

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [booking,setBooking] = useState(false);
  const [review,setReview] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const {scrollY, scrollYProgress} = useScroll();
  const heroY = useTransform(scrollY,[0,1000],[0,-65]);
  const heroScale = useTransform(scrollY,[0,1000],[1,1.12]);
  const heroShade = useTransform(scrollY,[0,850],[0,.4]);
  const openBooking = () => {setMenuOpen(false);setBooking(true);};
  useEffect(()=>{
    if(booking){dialog.current?.showModal();document.body.style.overflow='hidden';}
    else {dialog.current?.close();document.body.style.overflow='';}
    return ()=>{document.body.style.overflow='';};
  },[booking]);
  return <MotionConfig reducedMotion="user">
    <motion.div aria-hidden="true" style={{scaleX:scrollYProgress}} className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[#afad8e]"/>
    <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-cream focus:p-4">Skip to content</a>
    <header className="relative z-30 border-b border-ink/10 bg-cream">
      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
        <Brand/>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[12px] md:flex">
          <a className="transition-colors hover:text-olive" href="#philosophy">Our approach</a><a className="transition-colors hover:text-olive" href="#services">Services</a><a className="transition-colors hover:text-olive" href="#stories">Kind words</a><a className="transition-colors hover:text-olive" href="#visit">Find us</a>
        </nav>
        <button onClick={openBooking} className="group hidden items-center gap-7 rounded-full bg-plum px-6 py-3.5 text-[11px] text-cream transition-colors hover:bg-olive sm:flex">Book a consultation <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45"/></button>
        <button aria-label={menuOpen?'Close navigation':'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={()=>setMenuOpen(!menuOpen)} className="p-2 md:hidden">{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
      </div>
      <AnimatePresence>{menuOpen&&<motion.nav id="mobile-nav" aria-label="Mobile navigation" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="absolute w-full overflow-hidden border-b border-ink/10 bg-cream shadow-lg md:hidden"><div className="flex flex-col gap-6 px-7 py-8">{[['Our approach','philosophy'],['Services','services'],['Kind words','stories'],['Find us','visit']].map(([name,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)} className="text-xl">{name}</a>)}<button onClick={openBooking} className="rounded-full bg-plum p-4 text-cream">Book a consultation</button></div></motion.nav>}</AnimatePresence>
    </header>

    <main>
      <section ref={hero} id="home" className="sticky top-0 z-0 isolate min-h-[740px] overflow-hidden bg-[#e8e4df] md:h-[calc(100svh-88px)] md:min-h-[710px] md:max-h-[1000px]">
        <motion.div style={{y:reduced?0:heroY,scale:reduced?1:heroScale}} className="absolute inset-0 -z-10"><img src="/images/hero.webp" alt="Porcelain tooth sculpture embraced by a flowing blush silk ribbon" fetchPriority="high" className="h-full w-full object-cover object-[50%_44%] max-md:opacity-75"/></motion.div>
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#e8e4df]/30 via-transparent to-[#e8e4df]/15"/>
        <div className="relative mx-auto h-full min-h-[740px] max-w-[1600px] px-6 pt-8 md:min-h-0 md:px-12 lg:px-16">
          <div className="flex items-center justify-between"><Eyebrow>Care that comes full circle</Eyebrow><span className="hidden text-[10px] uppercase tracking-[.17em] text-ink/55 sm:block">Gulgasht, Multan · Pakistan</span></div>
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.15}} className="relative mt-14 max-w-[270px] md:mt-14 lg:mt-20">
            <h1 className="font-serif text-[39px] leading-[1.08] tracking-[-1.5px] md:text-[45px]">A little care.<br/>A renewed <em className="font-normal">you.</em></h1>
            <p className="mt-5 max-w-[215px] text-[12px] leading-[1.8] text-ink/65">Thoughtful skin and dental care.<br/>For the confidence to be yourself.</p>
            <button onClick={openBooking} className="group mt-7 flex items-center gap-5 border-b border-ink/40 pb-2 text-[11px]">Start your journey <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></button>
          </motion.div>
          <a href="#services" className="absolute right-10 top-28 hidden h-28 w-28 items-center justify-center lg:flex" aria-label="Explore skin and smile care"><svg className="orbit absolute inset-0 h-full w-full" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"/></defs><text fill="currentColor" fontSize="9.3" letterSpacing="3.3"><textPath href="#circle">SKIN • SMILE • SELF CONFIDENCE • </textPath></text></svg><Sparkles size={25} strokeWidth={1}/></a>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1.1,delay:.3,ease:[.22,1,.36,1]}} className="absolute inset-x-5 bottom-[120px] text-center md:inset-x-10 md:bottom-[84px]">
            <p aria-hidden="true" className="font-serif text-[clamp(130px,24.5vw,390px)] leading-[.77] tracking-[-.065em] text-plum">renew<span className="relative -top-[.47em] ml-[.05em] inline-block text-[.26em] font-normal tracking-normal">✳</span></p>
          </motion.div>
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between border-t border-ink/20 pt-5 md:inset-x-12 md:bottom-6 lg:inset-x-16">
            <p className="text-[9px] uppercase leading-[1.8] tracking-[.22em]">Skin. Smile.<br className="sm:hidden"/> A fresh perspective.</p>
            <a href="#stories" className="flex items-center gap-3"><span className="font-serif text-[28px]">4.4</span><span className="text-[9px] leading-[1.8]"><span className="block tracking-[2px] text-olive">★★★★★</span>7 reviews on Google</span></a>
            <a href="#philosophy" className="hidden items-center gap-4 text-[9px] uppercase tracking-[.2em] md:flex">A little more about us <ArrowDown size={16}/></a>
          </div>
        </div>
        <motion.div aria-hidden="true" style={{opacity:reduced?0:heroShade}} className="pointer-events-none absolute inset-0 z-20 bg-[#241f21]"/>
      </section>

      <div className="relative z-10 rounded-t-[28px] bg-cream shadow-[0_-24px_65px_-25px_rgba(48,42,42,.25)] md:rounded-t-[48px]">
      <section id="philosophy" className="mx-auto grid max-w-[1440px] gap-9 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-12 md:py-24 lg:px-16">
        <Reveal><Eyebrow>The Renew approach</Eyebrow><span className="mt-8 hidden font-serif text-7xl text-olive/35 md:block">✳</span></Reveal>
        <Reveal><ScrollStatement/><div className="mt-7 grid gap-5 text-[12px] leading-[1.9] text-ink/60 sm:grid-cols-2"><p>Two kinds of care. One simple idea: you deserve to feel comfortable, listened to, and confident in the choices you make.</p><p>At Renew Skin & Dental Clinic in Gulgasht, Multan, your next chapter begins with a conversation. Let’s find your way forward, together.</p></div></Reveal>
      </section>

      <Services onBook={openBooking}/>

      <section id="stories" className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:grid-cols-[1fr_1.7fr] md:gap-20 md:px-12 md:py-24 lg:px-16">
        <Reveal><Eyebrow>Kind words, real people</Eyebrow><h2 className="mt-6 font-serif text-[42px] leading-[1.1] tracking-[-1px]">Care that leaves<br/>an <em className="font-normal text-olive">impression.</em></h2><a href={maps} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 text-[10px] text-ink/65">4.4 / 5 · From 7 Google reviews <ArrowUpRight size={13}/></a></Reveal>
        <Reveal className="relative"><span aria-hidden="true" className="absolute -top-8 right-0 font-serif text-[120px] leading-none text-olive/15">“</span><div className="flex gap-1 text-olive" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(i=><Star key={i} size={12} fill="currentColor"/>)}</div><div className="min-h-[210px] sm:min-h-[150px]"><AnimatePresence mode="wait"><motion.blockquote key={review} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.25}} className="relative mt-6 max-w-[650px] font-serif text-[24px] leading-[1.4] md:text-[28px]">“{reviews[review].quote}”</motion.blockquote></AnimatePresence></div><div className="mt-7 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eae9e1] text-[11px]">{reviews[review].initials}</span><span className="text-[11px]">{reviews[review].name}<span className="mt-1 block text-[9px] text-ink/50">{reviews[review].treatment} · Google review excerpt</span></span></div><div className="flex items-center gap-2"><button aria-label="Previous review" onClick={()=>setReview((review+2)%3)} className="rounded-full border border-ink/20 p-2.5 transition-colors hover:bg-ink/5"><ChevronLeft size={16}/></button><span className="px-1 text-[9px] tabular-nums text-ink/55">0{review+1} / 03</span><button aria-label="Next review" onClick={()=>setReview((review+1)%3)} className="rounded-full border border-ink/20 p-2.5 transition-colors hover:bg-ink/5"><ChevronRight size={16}/></button></div></div></Reveal>
      </section>

      <section id="visit" className="overflow-hidden bg-plum px-6 pb-8 pt-16 text-cream md:px-12 md:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1312px]"><Reveal><div className="flex flex-col justify-between gap-10 border-b border-cream/20 pb-12 md:flex-row md:items-end"><div><Eyebrow light>Your next chapter</Eyebrow><ClosingHeading/></div><div className="max-w-[300px]"><p className="text-[12px] leading-[1.9] text-cream/65">A question, a concern, or a little curiosity.<br/>We’re here for your first step.</p><button onClick={openBooking} className="group mt-6 flex w-full items-center justify-between gap-12 rounded-full bg-cream px-6 py-4 text-[11px] text-plum transition-colors hover:bg-[#d3d1b9]">Book a consultation <ArrowUpRight size={17} className="transition-transform group-hover:rotate-45"/></button></div></div></Reveal>
          <div className="grid gap-8 py-10 md:grid-cols-[1.1fr_1fr_1fr]"><Brand light/><div><span className="text-[9px] uppercase tracking-[.18em] text-cream/45">Come say hello</span><p className="mt-3 max-w-[290px] text-[12px] leading-[1.8] text-cream/80">616/C Gulgasht, opposite Taste Hotel,<br/>near Jalal Masjid, North Gulgasht Colony,<br/>Multan 34400, Pakistan</p><a href={maps} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-3 border-b border-cream/40 pb-1 text-[10px]">Get directions <ArrowUpRight size={12}/></a></div><div><span className="text-[9px] uppercase tracking-[.18em] text-cream/45">A conversation away</span><a href="tel:+923061566136" className="mt-3 block font-serif text-[25px]">+92 306 1566136</a><p className="mt-3 text-[11px] leading-[1.8] text-cream/65">Visits by appointment.<br/>Please call to confirm current opening hours.</p></div></div>
          <footer className="flex flex-col justify-between gap-3 border-t border-cream/15 pt-6 text-[9px] text-cream/40 sm:flex-row"><span>© {new Date().getFullYear()} Renew Skin & Dental Clinic</span><span>Design preview · Imagery is illustrative</span><a href="#home" className="inline-flex items-center gap-2 text-cream/65">Back to top <ArrowUpRight size={12}/></a></footer>
        </div>
      </section>
      </div>
    </main>

    <dialog aria-labelledby="booking-title" ref={dialog} onCancel={()=>setBooking(false)} onClick={e=>{if(e.target===dialog.current)setBooking(false);}} className="fixed inset-0 m-auto w-[calc(100%-32px)] max-w-[490px] rounded-[3px] border-0 bg-cream p-0 text-ink shadow-2xl backdrop:bg-ink/50 backdrop:backdrop-blur-sm">
      <div className="relative p-8 md:p-11"><button autoFocus aria-label="Close booking options" onClick={()=>setBooking(false)} className="absolute right-4 top-4 rounded-full p-2 hover:bg-ink/5"><X size={19}/></button><Eyebrow>We’re here for you</Eyebrow><h2 id="booking-title" className="mt-7 font-serif text-[43px] leading-[1.1]">Your first step<br/>to <em className="font-normal text-olive">Renew.</em></h2><p className="mt-5 text-[13px] leading-[1.8] text-ink/65">Contact our team to discuss your visit and find a convenient time. Your appointment is confirmed directly by the clinic.</p><a href="tel:+923061566136" className="mt-7 flex items-center justify-between rounded-full bg-plum px-5 py-4 text-[12px] text-cream"><span className="flex items-center gap-3"><Phone size={15}/> Call +92 306 1566136</span><ArrowUpRight size={16}/></a><a href="https://wa.me/923061566136?text=Hello%20Renew%2C%20I%20would%20like%20to%20ask%20about%20a%20consultation." target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-between rounded-full border border-ink/20 px-5 py-4 text-[12px]"><span className="flex items-center gap-3"><MessageCircle size={15}/> Open WhatsApp</span><ArrowUpRight size={16}/></a><a href={maps} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 text-[11px] text-ink/60"><MapPin size={13}/> Find us in Gulgasht, Multan <ArrowRight size={13}/></a></div>
    </dialog>
  </MotionConfig>;
}
