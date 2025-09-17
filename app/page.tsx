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
          </h4>
          <p>
            React 및 SPA 아키텍처를 이용한 웹 애플리케이션 개발. 웹 접근성(A11y)
            향상, 성능 최적화, 사용자 경험 개선 작업을 수행하였습니다.
          </p>
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
