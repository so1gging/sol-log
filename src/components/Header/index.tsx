import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-18 max-w-screen-lg items-center justify-between px-4 sm:px-6">
        {/* 로고 */}
        <Link href="/" className="text-sm font-semibold">
          Kimsolzy
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-stone-900">
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-stone-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
