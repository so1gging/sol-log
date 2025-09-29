import { Post } from "@/lib/types";
import { PropsWithChildren } from "react";

interface PostLayoutProps extends PropsWithChildren {
  post: Post;
}

const PostLayout = ({ post, children }: PostLayoutProps) => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <article>
        <div className="xl:divide-y xl:divide-stone-200">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={post.dateString}>{post.dateString}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-stone-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {post.title}
                </h1>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PostLayout;
