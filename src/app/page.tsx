import { getPostList } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const postList = await getPostList("record");
  console.log(postList);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <ul>
            {postList.map((post) => (
              <Link href={post.url}>{Object.values(post).join(",")}</Link>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
