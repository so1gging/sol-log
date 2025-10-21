import { getPostList } from "@/lib/utils";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Link from "next/link";

export default async function Home() {
  const postList = await getPostList("record");

  return (
    <div className="divide-y divide-gray-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl leading-9 text-right font-light tracking-tight text-stone-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          어서오세요,
          <br />
          <span className="font-medium">김솔지블로그</span>입니다
          <span className="font-bold text-[#337ea9]">.</span>
          <br />
        </h1>
        <p className="text-base font-light text-right leading-6 text-stone-500 mb-20">
          방문해주셔서 감사합니다. <br /> 저는 이 공간에{" "}
          <span className="underline decoration-wavy underline-offset-4">
            제 기술적인 생각과 배운 점들을 기록
          </span>
          하고 있어요.
        </p>
        <ul className="divide-y divide-gray-200">
          {!postList.length && "No posts found."}
          {postList.map((post) => {
            const { url, title, date, desc } = post;
            return (
              <Link key={url} href={url} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {dayjs(date).format("YYYY-MM-DD")}{" "}
                          {dayjs(date).locale("ko").format("dddd")}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-4 font-bold tracking-tight">
                            <p className="text-stone-900 dark:text-gray-100">
                              {title}
                            </p>
                          </h2>
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-stone-400">
                          {desc}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <p
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}>
                          Read more &rarr;
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
