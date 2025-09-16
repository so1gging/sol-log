export default function Home() {
  return (
    <body>
      <header>
        <h1>홍길동</h1>
        <p>소프트웨어 엔지니어 / 웹 개발자</p>
        <p className="contact">
          이메일: <a href="mailto:hong@example.com">hong@example.com</a> |
          GitHub: <a href="https://github.com/hong">github.com/hong</a> |
          블로그: <a href="https://blog.example.com">blog.example.com</a>
        </p>
      </header>

      <section className="section" id="experience">
        <h2>경력</h2>

        <div className="job">
          <h3 className="job-title">주니어 백엔드 개발자 – ABC 회사</h3>
          <p className="job-info">2023.03 ~ 현재 | 서울, 대한민국</p>
          <p>
            주요 업무: REST API 설계 및 개발, 데이터베이스 모델링, 서버 최적화,
            코드 리뷰 및 배포 자동화
          </p>
        </div>

        <div className="job">
          <h3 className="job-title">웹 개발자 인턴 – XYZ 스타트업</h3>
          <p className="job-info">2022.06 ~ 2022.12 | 서울, 대한민국</p>
          <p>
            프론트엔드 개발 (React), UI 개선, 사용자 피드백 반영, 웹 접근성
            테스트
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>프로젝트</h2>
        <div className="job">
          <h3 className="job-title">포트폴리오 웹사이트</h3>
          <p className="job-info">React / Next.js / CSS Modules</p>
          <p>
            자기소개, 작업물, 블로그 등을 보기 좋게 정리한 반응형 웹사이트를
            제작하였고, 배포 자동화 설정까지 완료
          </p>
        </div>
        <div className="job">
          <h3 className="job-title">데이터 시각화 대시보드</h3>
          <p className="job-info">D3.js / Chart.js / Node.js</p>
          <p>
            기업 내부 데이터 기반 대시보드 제작, 실시간 업데이트, 사용자 권한에
            따른 대시보드 접근 제어 구현
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <h2>기술 스택</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Git / GitHub</li>
          <li>Docker</li>
        </ul>
      </section>

      <section className="section" id="education">
        <h2>학력</h2>
        <div className="job">
          <h3 className="job-title">서울대학교 컴퓨터공학과</h3>
          <p className="job-info">2019.03 ~ 2023.02</p>
          <p>학사 졸업</p>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>연락처</h2>
        <p>
          이메일: <a href="mailto:hong@example.com">hong@example.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/hong">github.com/hong</a>
        </p>
      </section>
    </body>
  );
}
