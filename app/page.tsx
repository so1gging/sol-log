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
              <li>기존 화면 개편 및 라이브러리 최신화</li>
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
              <li>팀 내 프론트엔드 기술 리딩 및 팀원 관리</li>
              <li>API 캐시 및 상태 관리 최적화 및 성능 개선</li>
              <li>프로토타입 기술 환경 및 아키텍처 설계</li>
              <li>Cypress ➝ Playwright E2E 테스트 Mirgration</li>
              <li>UI 파운데이션 설계</li>
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
        <h2>
          Ability
          <span className="primary-dash">_</span>
        </h2>
        <div className="job-item">
          <h3>Frontend Tech Leader</h3>
          <p>
            1년간 사내 내부 툴을 개발하는 RTB팀에서 Tech Leader 역할을
            맡았습니다. 팀의 기술적 방향성을 제시하고, 효율적인 협업 환경과
            일정관리를 통해 프로젝트 운영을 이끌었습니다.
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

      <section id="introduction">
        <h2>
          Introduction
          <span className="primary-dash">_</span>
        </h2>
        <p>
          저는 React와 Next.js를 중심으로 TypeScript를 사용하는 6년차 프론트엔드
          개발자입니다. <br /> 저는 프론트엔드 개발을 단순히 화면을 구성하는
          작업으로 보지 않습니다. <br /> 프론트엔드 개발자는 사용자와 가장
          밀접하게 닿아있기에 요구사항을 빠르게 반영하고 사용자 경험을 개선해
          나가는 역할이라고 생각합니다.
          <br /> 그렇기에 항상 사용자의 입장에서 고민하고, 요구사항을 적극적으로
          듣고 이해한 뒤, 더 나은 방향을 제안하려 노력합니다. <br /> 제품 개발
          과정에서 제가 가장 중요하게 여기는 가치는 ‘협업’입니다. 개인의
          완벽함보다, 팀원들과 함께 문제를 해결하고 제품을 완성해 나가는 과정을
          더 중요하게 생각합니다. 이를 위해 다양한 이해관계자들과 원활하게
          소통하는 환경을 지향하고 있습니다.
          <br /> 이러한 신념을 바탕으로, 지난 1년간은 Tech Leader로서 여러
          소규모 프로젝트를 리딩하며 팀과 함께 성장하는 경험을 쌓았습니다.
          <br />
          최근에는 신설 팀에 제안을 받아 시니어 프론트엔드 엔지니어로 합류하여
          활동하고 있습니다. <br /> 앞으로도 이 경험들이 동료들과 제품에
          긍정적인 가치를 더할 것이라 확신합니다.
        </p>
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
