import { Post } from "@/lib/types";
import { PropsWithChildren } from "react";

interface PostLayoutProps extends PropsWithChildren {
  post: Post;
}

const PostLayout = ({ post, children }: PostLayoutProps) => {
  return (
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
              <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-stone-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                {post.title}
              </h1>
            </div>
          </div>
        </header>
        <div className="prose prose-slate max-w-fit py-5">{children}</div>
      </div>
    </article>
  );
};

export default PostLayout;
