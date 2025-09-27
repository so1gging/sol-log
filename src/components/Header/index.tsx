import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10">
      <Link href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">로고</div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            타이틀
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {/* 타이틀 메뉴들 */}
        </div>
        {/* 기타 옵션들 */}
      </div>
    </header>
  );
};

export default Header;
