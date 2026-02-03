"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

type TechType = "all" | "react" | "next" | "map" | "testing";

interface Project {
  id: string;
  title: string;
  period: string;
  tech: string;
  techTags: TechType[];
  details: ReactNode[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "실거래 데이터 기반 분석 솔루션",
    period: "2025.07 ~ Present",
    tech: "React · Next.js · TypeScript · E2E",
    techTags: ["react", "next", "testing"],
    details: [
      "실거래 데이터 기반 분석·리포트형 서비스 프론트엔드 개발",
      <>
        인터랙션 개선을 통해{" "}
        <span className="relative inline-block">
          <span className="relative z-10">서버 트래픽과 응답 지연 문제 완화</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        서버 상태 라이브러리를 활용한{" "}
        <span className="relative inline-block">
          <span className="relative z-10">UX 응답성 개선</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        UI-API 간 브릿지 계층 설계로 필터 컴포넌트가{" "}
        <span className="relative inline-block">
          <span className="relative z-10">서버 스펙 변화에 독립적으로 동작하도록 구현</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        반복적인 수동 QA 체크리스트를{" "}
        <span className="relative inline-block">
          <span className="relative z-10">E2E 테스트로 자동화</span>
          <span className="accent-underline absolute inset-0" />
        </span>
        하여 배포 품질과 안정성 향상
      </>,
      <>
        CI/CD 배포 파이프라인 병렬 처리 및 캐싱 전략으로{" "}
        <span className="relative inline-block">
          <span className="relative z-10">평균 배포시간 50% 이상 단축</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
    ],
  },
  {
    id: "2",
    title: "사내 백오피스 리뉴얼 (Tech Lead)",
    period: "2024.07 ~ 2025.07",
    tech: "React · React Query · Playwright",
    techTags: ["react", "testing"],
    details: [
      "SPA 기반 백오피스 구조 설계 및 기술 방향성 리드",
      "React Query 도입으로 불필요한 API 호출 감소",
      "Playwright 기반 E2E 테스트 환경 개선",
    ],
  },
  {
    id: "3",
    title: "지도 기반 데이터 시각화 서비스",
    period: "2021.12 ~ Present",
    tech: "React · Next.js · Canvas · Map",
    techTags: ["react", "next", "map"],
    details: [
      "PoC 단계부터 참여하여 서비스 정식 출시까지 경험",
      "Canvas 기반 렌더링으로 대규모 데이터 성능 최적화",
      "사내 공통 Map 라이브러리 설계 및 구현",
    ],
  },
];

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<TechType>("all");
  const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());
  const [isAnimated, setIsAnimated] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleProject = (projectId: string) => {
    setOpenProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const filteredProjects =
    selectedTech === "all"
      ? projects
      : projects.filter((p) => p.techTags.includes(selectedTech));

  return (
    <div className="max-w-[1040px] mx-auto px-5">
      {/* Header */}
      <header className="pt-24 pb-18 md:pt-24 md:pb-18">
        <div ref={introRef}>
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight tracking-tight">
            안녕하세요,
            <br />
            <strong>
              <span
                className={`text-[var(--primary)] relative inline-block ${
                  isAnimated ? "animate-fade-slide" : "opacity-0"
                }`}
                style={{ transform: isAnimated ? "none" : "translateY(10px)" }}>
                <span className="relative z-10">소통을 중심</span>
                <span className="accent-underline absolute inset-0" />
              </span>
              으로 잘 만드는 방법을 고민하는
              <br />
              <span
                className={`inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-full bg-[rgba(31,111,255,0.12)] text-[var(--primary)] font-bold backdrop-blur-[10px] ${
                  isAnimated ? "animate-fade-slide-delay" : "opacity-0"
                }`}
                style={{ transform: isAnimated ? "none" : "translateY(10px)" }}>
                6년 차
                <span className="text-xs font-medium text-[var(--text-sub)] pl-2.5 border-l border-[rgba(31,111,255,0.3)]">
                  Frontend Engineer
                </span>
              </span>
            </strong>
            입니다.
          </h1>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-18">
        <h2 className="text-[30px] font-bold mb-6 tracking-tight">Projects</h2>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {(["all", "react", "next", "map", "testing"] as TechType[]).map(
            (tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3.5 py-2 rounded-full text-[13px] transition-all duration-200 backdrop-blur-[16px] border ${
                  selectedTech === tech
                    ? "bg-[var(--primary)] text-white border-transparent"
                    : "bg-[rgba(255,255,255,0.65)] border-[rgba(255,255,255,0.4)]"
                }`}>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isOpen = openProjects.has(project.id);
            return (
              <div
                key={project.id}
                onClick={() => toggleProject(project.id)}
                className="bg-[rgba(255,255,255,0.65)] backdrop-blur-[18px] rounded-[18px] border border-[rgba(255,255,255,0.4)] shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-[13px] text-[var(--text-sub)] whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <div className="text-xs text-[var(--text-sub)] mt-2">
                  {project.tech}
                </div>
                {isOpen && (
                  <div className="mt-4">
                    <ul className="pl-[18px] space-y-2">
                      {project.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-[15px] list-disc marker:text-[var(--text-sub)]">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-18 text-center text-sm text-[var(--text-sub)]">
        © Frontend Engineer Portfolio
      </footer>
    </div>
  );
}
