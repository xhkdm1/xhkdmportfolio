"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const projectInfo = [
  { label: "Project", value: "카카오T 홈 구조 탐색" },
  { label: "Team", value: "Product Designer 3인" },
  { label: "Contribution", value: "공동 리서치 · 설계 · 의사결정" },
  { label: "Research", value: "Play Store 리뷰 100건 · 사용자 조사 15명" },
  { label: "Tools", value: "Figma" },
  { label: "Outcome", value: "3개 방향 비교 → 2·3안 결합" },
];

const directions = [
  { number: "01", title: "기존 구조 유지", change: "기존 택시 위치와 서비스 배치를 대부분 유지했습니다.", difference: "세 방향 중 기존 홈과 가장 유사한 구조입니다.", image: "/images/kakaot/direction-01.png" },
  { number: "02", title: "프로모션 재배치", change: "서비스 영역과 프로모션의 위치와 크기를 조정했습니다.", difference: "서비스 영역과 프로모션이 차지하는 공간의 비중이 달라집니다.", image: "/images/kakaot/direction-02.png" },
  { number: "03", title: "홈 구조 재구성", change: "탭과 서비스 배열을 함께 재구성했습니다.", difference: "세 방향 중 기존 홈 구조에서 가장 크게 달라지는 안입니다.", image: "/images/kakaot/direction-03.png" },
];

const refinements = [
  { step: "01", title: "2안 + 3안 결합", body: "2안의 3D 아이콘과 3안의 연한 배경을 결합했습니다.", src: "/images/kakaot/evolution-06.png", alt: "2안의 3D 아이콘과 3안의 연한 배경을 결합한 과정" },
  { step: "02", title: "프로모션 위치 변경", body: "프로모션을 오른쪽으로 옮겨 서비스 영역과 공간을 분리했습니다.", src: "/images/kakaot/wireframe-a.png", alt: "프로모션을 오른쪽으로 옮긴 홈 화면 시안" },
  { step: "03", title: "띠 배너로 전환", body: "기존 카카오T의 띠 배너 표현을 참고해 프로모션 형태를 다시 구성했습니다.", src: "/images/kakaot/wireframe-b.png", alt: "프로모션을 띠 배너 형태로 구성한 홈 화면 시안" },
];

const decisionGroups = [
  { title: "조사에서 확인한 것", items: ["브랜드 인식 문항: 택시 7/9", "홈 구조 선호: E안 4/9", "시나리오 문항 응답자 6명: 이동할 때 → 택시 6/6", "리뷰 100건: UI 복잡성 9% · 광고 7% 관련 의견"] },
  { title: "설계에서 비교하고 바꾼 것", items: ["택시 진입점 위치와 서비스 배열", "상황별 탭 구조", "프로모션 위치와 크기", "2안과 3안 요소 결합", "프로모션 오른쪽 이동과 띠 배너 전환"] },
  { title: "확인하지 못한 것", items: ["실제 택시 탐색 시간", "다른 이동 서비스 발견률", "과업 성공률", "실제 프로모션 성과", "출시 후 사용자 행동 변화"] },
];

type LightboxImage = { src: string; alt: string };

export default function KakaoTCaseStudyPage() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setLightboxImage(null); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => { window.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = previousOverflow; };
  }, [lightboxImage]);

  const openImage = (src: string, alt: string) => setLightboxImage({ src, alt });

  return (
    <main className="min-h-screen bg-[#F7F7F3] text-[#151515]">
      <Header />
      <section id="overview" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#77776F]">Mobile UX · IA Exploration</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Kakao T<br />Home IA Exploration</h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#484842] sm:text-xl sm:leading-9">카카오T에 대한 인식과 홈 구조 선호를 조사하고, 택시 진입점을 유지하면서 다양한 이동 서비스를 함께 노출하는 홈 구조를 탐색했습니다.</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-14 grid overflow-hidden rounded-[32px] border border-[#E3E3DC] bg-white sm:grid-cols-2 lg:grid-cols-3">
            {projectInfo.map((item) => <div key={item.label} className="border-b border-[#E3E3DC] p-6 sm:border-r sm:last:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77776F]">{item.label}</p><p className="mt-3 text-sm font-medium leading-6">{item.value}</p></div>)}
          </div>
          <p className="mt-4 text-sm leading-7 text-[#77776F]">세 명이 역할을 나누기보다 리서치와 화면 설계, 방향 결정을 함께 진행했습니다.</p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <FadeIn><article className="rounded-[32px] bg-[#FEE500] p-7 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">Research Finding</p><p className="mt-8 text-4xl font-semibold tracking-[-0.05em]">7 / 9</p><p className="mt-4 text-lg leading-8">브랜드 인식 문항에서 9명 중 7명이 ‘택시’를 선택했습니다.</p><p className="mt-2 text-sm text-black/55">‘이동’을 선택한 응답은 2명이었습니다.</p></article></FadeIn>
          <FadeIn delay={0.06}><article className="rounded-[32px] bg-[#151515] p-7 text-white md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Design Challenge</p><p className="mt-8 text-2xl font-semibold leading-9 tracking-[-0.03em]">익숙한 택시 진입점을 유지하면서 다양한 이동 서비스를 홈에 함께 노출하는 구조를 탐색했습니다.</p></article></FadeIn>
        </div>

        <FadeIn>
          <div className="mt-6 rounded-[28px] border border-[#E3E3DC] bg-white px-7 py-6 md:flex md:items-center md:gap-10 md:px-10 md:py-8">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">Project Outcome</p>
            <p className="mt-4 text-lg font-semibold leading-8 tracking-[-0.02em] md:mt-0">3개 방향을 비교한 뒤 2안과 3안의 요소를 조합해 하나의 홈 시안을 구체화했습니다.</p>
          </div>
        </FadeIn>

        <FadeIn><div className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">As-is</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">기존 홈 구조를 먼저 확인했습니다.</h2><PortfolioImage src="/images/kakaot/ux-history.png" alt="카카오T 홈 화면 구조의 변화와 기존 홈" containerClassName="mt-8 aspect-[16/9] w-full" sizes="(max-width: 1200px) 100vw, 1100px" onOpen={() => openImage("/images/kakaot/ux-history.png", "카카오T 홈 화면 구조의 변화와 기존 홈")} priority /><ul className="mt-6 grid gap-3 text-sm leading-7 text-[#66665F] sm:grid-cols-2 lg:grid-cols-4">{["상황별 탭으로 서비스 구분", "택시 외 여러 이동 서비스 노출", "서비스와 프로모션이 한 화면에 배치", "택시 진입점 위치"].map((item) => <li key={item} className="rounded-2xl border border-[#E3E3DC] bg-white px-5 py-4">{item}</li>)}</ul></div></FadeIn>
      </section>

      <section id="evidence" className="bg-[#ECECE6]"><Section><SectionHeading index="02" eyebrow="Evidence" title="리뷰만으로 원인을 확정하지 않고, 사용자 인식과 홈 구조 선호를 확인했습니다." /><div className="grid gap-6 lg:grid-cols-2"><EvidenceCard label="Play Store 리뷰 100건" value="9% · 7%" title="UI 복잡성 · 광고" body="리뷰에서 UI 복잡성과 광고에 대한 불만이 일부 확인됐습니다. 리뷰만으로 원인을 확정하지 않고 사용자 인식과 홈 구조 선호를 추가로 확인했습니다." dark /><div className="grid gap-6 sm:grid-cols-2"><EvidenceCard label="브랜드 인식" value="7 / 9" body="‘카카오T를 한 단어로 표현한다면?’이라는 문항에서 9명 중 7명이 ‘택시’, 2명이 ‘이동’을 선택했습니다." /><EvidenceCard label="홈 구조 선호" value="4 / 9" body="홈 구조 선호 문항에서 9명 중 4명이 5×3 배열의 E안을 선택해 가장 많았습니다. 해당 안을 선택한 한 응답자는 ‘익숙함’을 이유로 들었습니다." /><div className="sm:col-span-2"><EvidenceCard label="시나리오 문항 응답자 6명" value="6 / 6" body="‘물건보낼 때’ 탭이 먼저 열린 상황을 제시했을 때, 시나리오 문항 응답자 6명 모두 ‘이동할 때’ 탭으로 바꾼 뒤 택시를 선택했습니다." note="실제 행동 관찰이 아닌 설문 시나리오 응답입니다." accent /></div></div></div><FadeIn><p className="mt-10 rounded-[28px] bg-white p-7 text-xl font-semibold leading-9 tracking-[-0.025em] md:p-9">다양한 이동 서비스를 함께 보여주더라도 택시 진입점의 위치와 예측 가능성은 유지해야 한다고 판단했습니다.</p></FadeIn></Section></section>

      <Section id="directions"><SectionHeading index="03" eyebrow="Three Directions" title="택시 진입점을 유지하며 홈 구조를 세 방향으로 비교했습니다." description="조사 이후 하나의 답을 정하지 않고, 기존 구조를 유지하는 정도와 서비스·프로모션 배치를 다르게 가져갔습니다." /><div className="grid gap-6 lg:grid-cols-3">{directions.map((item, index) => <FadeIn key={item.number} delay={index * 0.05}><article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[#E3E3DC] bg-white"><PortfolioImage src={item.image} alt={`Direction ${item.number} ${item.title} 화면`} containerClassName="h-[520px] w-full rounded-none border-0 bg-[#F0F2F5] sm:h-[620px] lg:h-[560px]" className="p-5" sizes="(max-width: 1024px) 100vw, 33vw" onOpen={() => openImage(item.image, `Direction ${item.number} ${item.title} 화면`)} /><div className="flex flex-1 flex-col p-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">Direction {item.number}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3><p className="mt-6 leading-8 text-[#55554F]">{item.change}</p><p className="mt-3 border-t border-[#E3E3DC] pt-4 text-sm leading-7 text-[#77776F]">{item.difference}</p></div></article></FadeIn>)}</div></Section>

      <section id="refined" className="bg-[#151515] text-white"><Section><SectionHeading index="04" eyebrow="Feedback → Refined Direction" title="피드백을 반영해 2안과 3안의 요소를 조합하고, 하나의 방향을 화면으로 구체화했습니다." description="사용자 과업 테스트를 진행하지 않아 최종안으로 확정하지 않았습니다." dark /><div className="space-y-8">{refinements.map((item, index) => <FadeIn key={item.step}><article className="grid overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.06] lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch"><div className="p-7 md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Step {item.step}</p><h3 className="mt-4 text-2xl font-semibold">{item.title}</h3><p className="mt-5 leading-8 text-white/65">{item.body}</p></div><PortfolioImage src={item.src} alt={item.alt} containerClassName={`w-full rounded-none border-0 bg-[#EEF1F5] ${index === 0 ? "aspect-[16/9]" : "h-[420px] lg:h-[520px]"}`} className="p-3 sm:p-5" sizes="(max-width: 1024px) 100vw, 65vw" onOpen={() => openImage(item.src, item.alt)} /></article></FadeIn>)}</div><FadeIn><div className="mt-10 rounded-[32px] bg-[#FEE500] p-7 text-[#151515] md:p-10"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">Refined Direction</p><p className="mt-4 text-2xl font-semibold leading-9 tracking-[-0.03em]">2·3안의 요소를 결합하고 프로모션 표현을 조정한 홈 화면 시안</p></div></FadeIn></Section></section>

      <Section id="limits"><SectionHeading index="05" eyebrow="Decision & Limits" title="확인한 근거와 설계 판단, 미검증 범위를 구분했습니다." /><div className="grid gap-6 lg:grid-cols-3">{decisionGroups.map((group, index) => <FadeIn key={group.title} delay={index * 0.05}><article className={`h-full rounded-[30px] p-7 ${index === 2 ? "bg-[#ECECE6]" : "border border-[#E3E3DC] bg-white"}`}><p className="text-sm font-semibold">{group.title}</p><ul className="mt-8 space-y-4 text-sm leading-7 text-[#55554F]">{group.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#151515]" /><span>{item}</span></li>)}</ul></article></FadeIn>)}</div><FadeIn><p className="mt-10 rounded-[32px] bg-[#FEE500] p-7 text-xl font-semibold leading-9 tracking-[-0.025em] md:p-10 md:text-2xl">피드백을 반영해 하나의 방향을 구체화했지만, 사용자 과업 테스트를 진행하지 않아 사용성 효과는 확인하지 못했습니다.</p></FadeIn></Section>

      <Footer /><ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </main>
  );
}

function Header() { return <header className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12"><a href="#overview" className="text-sm font-semibold">HYEJIN · PORTFOLIO</a><nav className="hidden items-center gap-6 text-sm text-[#77776F] md:flex">{[["Evidence", "evidence"], ["Directions", "directions"], ["Refined", "refined"], ["Limits", "limits"]].map(([label, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-black">{label}</a>)}</nav></header>; }

function Section({ id, children }: { id?: string; children: ReactNode }) { return <div id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">{children}</div>; }

function SectionHeading({ index, eyebrow, title, description, dark = false }: { index: string; eyebrow: string; title: string; description?: string; dark?: boolean }) { return <div className={`mb-14 grid gap-5 border-t pt-6 md:grid-cols-[190px_1fr] ${dark ? "border-white/15" : "border-[#E3E3DC]"}`}><p className={dark ? "text-sm text-white/45" : "text-sm text-[#77776F]"}>{index} · {eyebrow}</p><div><h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-white/55" : "text-[#66665F]"}`}>{description}</p>}</div></div>; }

function EvidenceCard({ label, value, title, body, note, dark = false, accent = false }: { label: string; value: string; title?: string; body: string; note?: string; dark?: boolean; accent?: boolean }) { const color = dark ? "bg-[#151515] text-white" : accent ? "bg-[#FEE500]" : "border border-[#E3E3DC] bg-white"; return <FadeIn><article className={`h-full rounded-[30px] p-7 md:p-9 ${color}`}><p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/45" : "text-[#77776F]"}`}>{label}</p><p className="mt-8 text-4xl font-semibold tracking-[-0.05em]">{value}</p>{title && <p className="mt-2 text-lg font-semibold">{title}</p>}<p className={`mt-6 text-sm leading-7 ${dark ? "text-white/65" : "text-[#55554F]"}`}>{body}</p>{note && <p className="mt-4 border-t border-black/15 pt-4 text-xs leading-6 text-black/55">{note}</p>}</article></FadeIn>; }

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) { return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }

function PortfolioImage({ src, alt, className = "", containerClassName = "", sizes = "100vw", priority = false, onOpen }: { src: string; alt: string; className?: string; containerClassName?: string; sizes?: string; priority?: boolean; onOpen?: () => void }) { return <div className={`relative flex items-center justify-center overflow-hidden rounded-[28px] border border-[#E3E3DC] bg-white ${containerClassName}`}><button type="button" onClick={onOpen} aria-label={`${alt} 확대해서 보기`} className="group absolute inset-0 flex h-full w-full cursor-zoom-in items-center justify-center border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151515]/50"><Image src={src} alt={alt} fill priority={priority} draggable={false} sizes={sizes} className={`object-contain ${className}`} /><span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/85 text-[#151515] shadow-sm backdrop-blur-sm transition group-hover:bg-white"><Maximize2 className="h-4 w-4" /></span></button></div>; }

function ImageLightbox({ image, onClose }: { image: LightboxImage | null; onClose: () => void }) { if (!image) return null; return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6 sm:px-6 lg:px-8" role="dialog" aria-modal="true" aria-label="이미지 확대 보기" onClick={onClose}><button type="button" onClick={onClose} aria-label="닫기" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#151515] shadow-lg transition hover:bg-white"><X className="h-5 w-5" /></button><div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" /></div></div>; }

function Footer() { return <footer className="border-t border-[#E3E3DC] bg-white"><div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><p className="text-sm text-[#77776F]">Next project</p><p className="mt-1 text-xl font-semibold">WithBuddy · AI Onboarding SaaS</p></div><a href="/projects/withbuddy" className="flex items-center gap-2 text-sm font-semibold">View next case study<ArrowRight className="h-4 w-4" /></a></div></footer>; }
