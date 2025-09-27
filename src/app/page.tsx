import { getPostList } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const postList = await getPostList("record");

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          POSTS_
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          설명이에요.
        </p>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!postList.length && "No posts found."}
          {postList.map((post) => {
            const { url, title, date, desc } = post;
            return (
              <li key={url} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{date.toString()}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={url}
                              className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {desc}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={url}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}>
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
