import { components } from "@/components/MdxComponents";
import { getPostDetail } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error - 타입 불일치 허용 (MDX 컴포넌트 타입 미지원)
export default async function PostDetail({ params: { category, slug } }) {
  const post = await getPostDetail(category, slug);

  return (
    <div>
      <MDXRemote source={post.content} components={components} />
    </div>
  );
}
