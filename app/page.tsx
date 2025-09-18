export default function Home() {
  return (
    <body>
      <header>
        <h1>
          안녕하세요,
          <br />
          김솔지입니다
          <span className="primary-dash">_</span>
        </h1>
        <p className="contact">
          <a href="mailto:hong@example.com">hong@example.com</a> ·
          <a href="https://github.com/hong">github.com/hong</a> ·
          <a href="https://linkedin.com/in/hong">linkedin.com/in/hong</a>
        </p>
        <p className="description">
          저는 6년차 <span className="highlight">웹 프론트엔드 엔지니어</span>{" "}
          입니다.
          <br />
          &#39;혼자&#39;보다 &#39;함께&#39;를 지향하는 환경을 선호하며,
          <br /> 제품을 잘 만들고, 의견과 이해를 잘 나누고 맞추는 사람이 되고자
          노력합니다.
        </p>
      </header>

      <section id="experience">
        <h2>
          Work Experience
          <span className="primary-dash">_</span>
        </h2>
        <h3>
          알스퀘어
          <p className="info">Frontend Developer · 2020.09 ~ 재직중 · 서울</p>
        </h3>
        <div className="job-item">
          <h4>
            RA 개발팀
            <p className="info">2025.08 ~ 현재</p>
            <p className="rule">
              자사 데이터솔루션 RA 서비스를 개편하고 신규 기능 개발에 참여하고
              있습니다.
            </p>
          </h4>
          <div className="history">
            <ul>
              <li>기존 CI/CD 최적화</li>
              <li>서비스 안정성 및 레거시 시스템 개선</li>
              <li>자체 BI 툴 필터 기능 설계·구현</li>
            </ul>
          </div>
          <div className="skills">
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>x-styled</span>
          </div>
        </div>
        <div className="job-item">
          <h4>
            RTB팀
            <p className="info">2024.07 ~ 2025.08</p>
            <p className="rule">
              사내 업무 툴을 유지보수하고 차세대 프로토타입을 개발하였습니다.
            </p>
          </h4>
          <div className="history">
            <ul>
              <li>팀 내 프론트엔드 기술 리딩하고 팀원 관리</li>
              <li>API 캐시 및 상태 관리 최적화하여 성능 개선</li>
              <li>프로토타입 기술 환경 및 아키텍처 설계</li>
              <li>
                Cypress ➝ Playwright E2E 테스트 Mirgration 및 테스트 시간 단축
              </li>
            </ul>
          </div>
          <div className="skills">
            <span>TypeScript</span>
            <span>React</span>
            <span>emotion</span>
          </div>
        </div>
        <div className="job-item">
          <h4>
            Frontend 팀<p className="info">2021.12 ~ 2024.07</p>
            <p className="rule">
              자사 데이터솔루션 RA 서비스 PoC 부터 서비스 런칭까지 메인 개발자로
              참여하였습니다.
            </p>
          </h4>
          <div className="history">
            <ul>
              <li>
                JavaScript기반 Static Map API 를 React 컴포넌트로 래핑해 사내 맵
                라이브러리 구축
              </li>
              <li>API 캐시 및 상태 관리 최적화하여 성능 개선</li>
              <li>Cypress 기반 E2E 테스트 자동화 구축</li>
              <li>
                소나큐브 및 데이터독 기반 에러 트래킹 및 정적 분석으로 코드 품질
                향상 기여
              </li>
            </ul>
          </div>
          <div className="skills">
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>x-styled</span>
          </div>
        </div>
        <div className="job-item">
          <h4>
            솔루션개발 팀<p className="info">2020.09 ~ 2021.12</p>
            <p className="rule">
              사내 업무 툴 화면 및 API 개발 및 인프라 관리에 기여하였습니다.
            </p>
          </h4>
          <div className="history">
            <ul>
              <li>기본 기능 화면 및 API 개발</li>
              <li>사내 업무용 android 앱 유지보수</li>
              <li>swiftUI로 사내 업무용 IOS 어플 프로토타입 개발</li>
            </ul>
          </div>
          <div className="skills">
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>spring boot</span>
            <span>kotlin</span>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>프로젝트</h2>
        <div className="job-item">
          <h3>포트폴리오 웹사이트 제작</h3>
          <p className="info">Next.js · Tailwind CSS · Vercel</p>
          <p>
            개인 작업물, 블로그, 기술 스택을 정리한 포트폴리오 사이트. 반응형
            디자인 및 SEO, 퍼포먼스 최적화 중심으로 구성하였습니다.
          </p>
        </div>
        <div className="job-item">
          <h3>데이터 시각화 대시보드</h3>
          <p className="info">D3.js · Chart.js · Node.js</p>
          <p>
            기업 내부의 KPI를 시각화하여 대시보드 제공. 실시간 업데이트 및
            사용자 맞춤 필터 기능 구현.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2>기술 스택</h2>
        <div className="skills">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>CSS / HTML</span>
          <span>Git</span>
          <span>AWS</span>
        </div>
      </section>

      <section id="education">
        <h2>학력</h2>
        <div className="education-item">
          <h3>서울대학교 컴퓨터공학과</h3>
          <p className="info">2018.03 ~ 2022.02 · 학사 졸업</p>
        </div>
      </section>

      <footer>마지막 업데이트: 2025년 9월 · Designed & Built by 홍길동</footer>
    </body>
  );
}
