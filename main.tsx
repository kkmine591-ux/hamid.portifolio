import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import "./index.css";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const projects = [
  {
    no: "01",
    type: "Creative / Client",
    name: "Visual Campaign",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    ]
  },
  {
    no: "02",
    type: "Branding / Personal",
    name: "Aura Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    ]
  },
  {
    no: "03",
    type: "Digital / Client",
    name: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    ]
  }
];

const services = [
  ["01", "Graphic Design", "Creating strong visual designs for brands, social media, campaigns, thumbnails and digital content."],
  ["02", "Video Editing", "Clean, engaging edits with pacing, transitions, sound, typography and visual storytelling."],
  ["03", "Motion Graphics", "Dynamic motion graphics, animated typography and visual effects that make content memorable."],
  ["04", "Digital Marketing", "Creative digital marketing support focused on content, campaigns, social media and brand growth."],
  ["05", "Camera Operator", "Professional camera operation for promotional content, events, products and creative productions."]
];

function FadeIn({children, delay=0, duration=.7, x=0, y=30, className=""}: any) {
  return <motion.div className={className} initial={{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,margin:"50px",amount:0}} transition={{delay,duration,ease:[.25,.1,.25,1]}}>{children}</motion.div>;
}

function ContactButton() {
  return <a href="mailto:hello@hamidportfolio.com" className="relative inline-flex items-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.03]" style={{background:"linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)",boxShadow:"0 4px 4px rgba(181,1,167,.25), 4px 4px 12px #7721B1 inset",outline:"2px solid white",outlineOffset:"-3px"}}>Contact Me <Mail size={17}/></a>;
}

function Magnet({children}: {children:React.ReactNode}) {
  const ref=useRef<HTMLDivElement>(null);
  const [transform,setTransform]=useState("translate3d(0,0,0)");
  useEffect(()=>{
    const el=ref.current; if(!el)return;
    const move=(e:MouseEvent)=>{
      const r=el.getBoundingClientRect(), px=e.clientX-r.left, py=e.clientY-r.top;
      const dx=px-r.width/2, dy=py-r.height/2, pad=150;
      if(px>-pad && px<r.width+pad && py>-pad && py<r.height+pad) setTransform(`translate3d(${dx/3}px,${dy/3}px,0)`);
      else setTransform("translate3d(0,0,0)");
    };
    window.addEventListener("mousemove",move);
    return()=>window.removeEventListener("mousemove",move);
  },[]);
  return <div ref={ref} style={{transform,transition:"transform .3s ease-out",willChange:"transform"}}>{children}</div>;
}

function AnimatedText() {
  const ref=useRef<HTMLParagraphElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start 0.8","end 0.2"]});
  const text="With more than five years of experience in design, I focus on branding, web design, video editing, motion graphics, and digital experiences. I truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";
  const chars=[...text];
  return <p ref={ref} className="relative max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]">
    <span className="invisible">{text}</span>
    <span className="absolute inset-0">{chars.map((c,i)=><Char key={i} char={c} index={i} total={chars.length} progress={scrollYProgress}/>)}</span>
  </p>;
}
function Char({char,index,total,progress}:{char:string,index:number,total:number,progress:MotionValue<number>}) {
  const start=index/total*.75, end=start+.18;
  const opacity=useTransform(progress,[start,end],[.2,1]);
  return <motion.span style={{opacity}}>{char}</motion.span>;
}

function Hero() {
  return <section className="relative flex h-screen min-h-[650px] flex-col overflow-x-clip">
    <FadeIn y={-20}><nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
      {["About","Price","Projects","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`} className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]">{x}</a>)}
    </nav></FadeIn>
    <div className="mt-6 overflow-hidden sm:mt-4 md:-mt-5"><FadeIn y={40} delay={.15}><h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">Hi, I&apos;m Hamid</h1></FadeIn></div>
    <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
      <FadeIn y={20} delay={.35}><p className="max-w-[160px] text-[clamp(.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">a digital creator driven by crafting striking and unforgettable projects</p></FadeIn>
      <FadeIn y={20} delay={.5}><ContactButton/></FadeIn>
    </div>
    <FadeIn y={30} delay={.6} className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
      <Magnet><img src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" alt="Hamid portrait" className="w-[280px] object-contain sm:w-[360px] md:w-[440px] lg:w-[520px]" /></Magnet>
    </FadeIn>
  </section>;
}

function Marquee() {
  const ref=useRef<HTMLElement>(null); const [offset,setOffset]=useState(0);
  useEffect(()=>{const fn=()=>{if(ref.current){const top=ref.current.getBoundingClientRect().top+window.scrollY; setOffset((window.scrollY-top+window.innerHeight)*.3)}}; window.addEventListener("scroll",fn,{passive:true});fn();return()=>window.removeEventListener("scroll",fn)},[]);
  const row1=marqueeImages.slice(0,11), row2=marqueeImages.slice(11);
  return <section ref={ref} className="overflow-hidden bg-[#0C0C0C] px-0 pb-10 pt-24 sm:pt-32 md:pt-40">
    {[row1,row2].map((row,i)=><div key={i} className="mb-3 flex w-max gap-3" style={{transform:`translateX(${i===0?offset-200:-(offset-200)}px)`,willChange:"transform"}}>{[...row,...row,...row].map((src,j)=><img key={j} src={src} loading="lazy" alt="" className="h-[270px] w-[420px] rounded-2xl object-cover" />)}</div>)}
  </section>;
}

function About() {
  return <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10">
    <img className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" />
    <img className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" />
    <img className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" />
    <img className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" />
    <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn y={40}><h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">About Me</h2></FadeIn>
      <AnimatedText/>
      <FadeIn y={20} delay={.2}><ContactButton/></FadeIn>
    </div>
  </section>;
}

function Services() {
  return <section id="price" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
    <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">Services</h2>
    <div className="mx-auto max-w-5xl">{services.map(([no,name,desc],i)=><FadeIn key={no} delay={i*.1}><div className="grid grid-cols-[90px_1fr] gap-5 border-t border-[rgba(12,12,12,.15)] py-8 sm:grid-cols-[150px_1fr] sm:py-10 md:grid-cols-[220px_1fr] md:py-12">
      <div className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">{no}</div>
      <div><h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">{name}</h3><p className="max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60">{desc}</p></div>
    </div></FadeIn>)}</div>
  </section>;
}

function LiveButton(){return <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm">Live Project <ArrowUpRight size={15}/></a>}

function ProjectCard({project,index}:{project:any,index:number}) {
  const ref=useRef<HTMLDivElement>(null); const {scrollYProgress}=useScroll({target:ref,offset:["start end","start start"]});
  const scale=useTransform(scrollYProgress,[0,1],[1,1-(projects.length-1-index)*.03]);
  return <div ref={ref} className="relative h-[85vh]"><motion.div style={{scale,top:index*28}} className="sticky top-24 overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:top-32 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
    <div className="mb-5 flex items-center gap-3 overflow-hidden sm:mb-7"><span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">{project.no}</span><div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">{project.type}</p><h3 className="truncate text-[clamp(1.1rem,3vw,2.6rem)] font-medium uppercase text-[#D7E2EA]">{project.name}</h3></div><LiveButton/></div>
    <div className="grid grid-cols-5 gap-2 sm:gap-3"><div className="col-span-2 flex flex-col gap-2 sm:gap-3"><img src={project.images[0]} alt="" className="h-[clamp(130px,16vw,230px)] w-full rounded-[30px] object-cover sm:rounded-[40px]"/><img src={project.images[1]} alt="" className="h-[clamp(160px,22vw,340px)] w-full rounded-[30px] object-cover sm:rounded-[40px]"/></div><img src={project.images[2]} alt="" className="col-span-3 h-full min-h-[310px] w-full rounded-[30px] object-cover sm:rounded-[50px] md:rounded-[60px]"/></div>
  </motion.div></div>;
}

function Projects() {
  return <section id="projects" className="-mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
    <FadeIn y={40}><h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">Project</h2></FadeIn>
    {projects.map((p,i)=><ProjectCard key={p.no} project={p} index={i}/>)}
    <div id="contact" className="flex flex-col items-center gap-6 py-24 text-center"><p className="text-sm uppercase tracking-widest text-[#D7E2EA]/50">Have a project in mind?</p><ContactButton/></div>
  </section>;
}

function App(){return <main className="overflow-x-clip bg-[#0C0C0C]"><Hero/><Marquee/><About/><Services/><Projects/></main>}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);