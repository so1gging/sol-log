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
    title: "실거래 데이터 기반 분석 솔루션 – Rsquare Analytics",
    period: "2025.08 ~ Present",
    tech: "React · Next.js · TypeScript · E2E",
    techTags: ["react", "next", "testing"],
    details: [
      <>
        인터랙션 개선을 통해{" "}
        <span className="relative inline-block">
          <span className="relative z-10">서버 트래픽과 응답 지연 문제 완화</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        서버 상태 라이브러리를 활용해{" "}
        <span className="relative inline-block">
          <span className="relative z-10">UX 응답성 개선</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        E2E 테스트 도입으로{" "}
        <span className="relative inline-block">
          <span className="relative z-10">QA 자동화 및 배포 안정성 향상</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      <>
        CI/CD 파이프라인 개선으로{" "}
        <span className="relative inline-block">
          <span className="relative z-10">평균 배포 시간 50% 이상 단축</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
    ],
  },
  {
    id: "2",
    title: "사내 백오피스 서비스",
    period: "2024.07 ~ 2025.07",
    tech: "React · React Query · Playwright",
    techTags: ["react", "testing"],
    details: [
      <>
        <span className="relative inline-block">
          <span className="relative z-10">프론트엔드 테크리드</span>
          <span className="accent-underline absolute inset-0" />
        </span>
        로서 팀원 기술적 방향 제시 및 프로젝트 운영
      </>,
      "React Query의 캐싱 전략을 활용해 불필요한 API 호출을 줄이고 응답 성능 개선",
      <>
        누적된 운영 업무의{" "}
        <span className="relative inline-block">
          <span className="relative z-10">70% 이상을 해결</span>
          <span className="accent-underline absolute inset-0" />
        </span>
        하여 서비스 안정성과 사용자 만족도 향상
      </>,
      "기존 E2E 테스트 환경 Playwright로 마이그레이션 및 속도 개선",
    ],
  },
  {
    id: "3",
    title: "지도 기반 데이터 시각화 서비스",
    period: "2021.12 ~ 2024.07",
    tech: "React · Next.js · Canvas · Map",
    techTags: ["react", "next", "map"],
    details: [
      "신규 프로젝트 PoC부터 출시 전 과정 프론트엔드 개발 참여",
      "JavaScript 기반 Naver Map API를 선언적으로 구현하여 사내 라이브러리화",
      <>
        canvas 기반 맵 레이어를 구현해{" "}
        <span className="relative inline-block">
          <span className="relative z-10">수만 건의 DOM 엘리먼트를 효율적으로 시각화</span>
          <span className="accent-underline absolute inset-0" />
        </span>
        하여 성능 개선
      </>,
      "정적 분석 도구 SonarQube를 활용하여 버그를 사전 식별하고 코드 품질 향상 기여",
    ],
  },
  {
    id: "4",
    title: "사내 프로젝트 개발 및 유지보수",
    period: "2020.09 ~ 2021.12",
    tech: "React · Android · AWS · Firebase",
    techTags: ["react"],
    details: [
      "웹/앱 화면 개발 및 API 연동",
      "데스크탑과 모바일에 최적화된 반응형 개발",
      "Android 기반 APP 유지보수",
      <>
        AWS SNS 서비스를 연동하여{" "}
        <span className="relative inline-block">
          <span className="relative z-10">글로벌 문자인증 서비스 제공</span>
          <span className="accent-underline absolute inset-0" />
        </span>
      </>,
      "Firebase notification service를 이용해 앱 메시징 서비스 개발",
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
