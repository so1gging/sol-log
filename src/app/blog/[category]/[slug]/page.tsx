import { getPostDetail } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PostDetail({ params: { category, slug } }) {
  const post = await getPostDetail(category, slug);

  return (
    <div>
      <MDXRemote source={post.content} />
    </div>
  );
}
