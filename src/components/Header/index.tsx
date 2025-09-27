import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center w-full bg-white justify-between py-8">
      <Link href="/">
        <div className="flex items-center justify-between">
          <div className="hidden h-6 text-sm sm:block">Kimsolzy</div>
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
