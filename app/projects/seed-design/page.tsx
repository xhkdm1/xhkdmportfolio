import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Process from "./components/Process";
import SystemBuild from "./components/SystemBuild";
import QA from "./components/QA";
import Findings from "./components/Findings";
import Learning from "./components/Learning";
import ProjectFooter from "./components/ProjectFooter";
import TestResult from "./components/TestResult";

export const metadata = {
  title: "Seed Design System Clone & QA | 박혜진 포트폴리오",
  description:
    "공개된 Seed Design System을 재구성하고 다른 디자이너의 화면 조립 가능성을 검증한 프로젝트입니다.",
};

export default function SeedDesignPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <Overview />
      <Process />
      <SystemBuild />
      <QA />
      <TestResult />
      <Findings />
      <Learning />
      <ProjectFooter />
    </main>
  );
}
