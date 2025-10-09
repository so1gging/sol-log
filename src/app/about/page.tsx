import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section>
      <div className="flex flex-col w-full gap-5">
        {/* 사진 */}
        <div className="flex w-full items-center justify-center">
          <div className="bg-amber-300 w-[210px] h-[210px] rounded-full"></div>
        </div>
        {/* 링크 */}
        <div className="text-sm space-x-1 text-stone-600 flex gap-3 justify-center">
          <a
            href="mailto:yzlosmik@gmail.com"
            className="hover:underline hover:decoration-wavy hover:underline-offset-4">
            yzlosmik@gmail.com
          </a>
          <a
            href="https://github.com/so1gging"
            className="hover:underline hover:decoration-wavy hover:underline-offset-4">
            github.com/so1gging
          </a>
          <a
            href="https://www.linkedin.com/in/solzykim/"
            className="hover:underline hover:decoration-wavy hover:underline-offset-4">
            linkedin.com/in/solzykim
          </a>
        </div>
        <div className="mt-2 text-base text-stone-800 flex gap-3 justify-center">
          <p>
            저는 6년차
            <span className="bg-[#ddf6d2] px-1 text-[#555879]">
              웹 프론트엔드 엔지니어
            </span>
            입니다.
            <br />
            &#39;혼자&#39;보다 &#39;함께&#39;를 지향하는 환경을 선호하며,
            <br /> 제품을 잘 만들고, 의견과 이해를 잘 나누고 맞추는 사람이
            되고자 노력합니다.
          </p>
        </div>
        <div className="my-2 bg-stone-300 h-[1px] w-[500px] m-auto" />
        <div className="flex gap-3 justify-center text-stone-800">
          <p className="text-center">
            저는 프론트엔드 개발을 단순히 화면을 구성하는 작업으로 보지
            않습니다. <br />
            프론트엔드 개발자는 사용자와 가장 밀접하게 닿아있기에
            <br /> 요구사항을 빠르게 반영하고 사용자 경험을 개선해 나가는
            역할이라고 생각합니다.
            <br />
            <br />
            그렇기에 항상 사용자의 입장에서 고민하고,
            <br /> 요구사항을 적극적으로 듣고 이해한 뒤, 더 나은 방향을 제안하려
            노력합니다.
            <br />
            <br />
            제품 개발 과정에서 제가 가장 중요하게 여기는 가치는 ‘협업’입니다.
            <br />
            개인의 완벽함보다, 팀원들과 함께 문제를 해결하고 제품을 완성해
            나가는 과정을 더 중요하게 생각합니다.
            <br />
            <br />
            이러한 신념을 바탕으로, 지난 1년간은 Tech Leader로서
            <br /> 여러 소규모 프로젝트를 리딩하며 팀과 함께 성장하는 경험을
            쌓았습니다.
            <br />
            <br />
            최근에는 신설 팀에 제안을 받아 시니어 프론트엔드 엔지니어로 합류하여
            활동하고 있습니다. <br />
            앞으로도 이 경험들이 동료들과 제품에 긍정적인 가치를 더할 것이라
            확신합니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
