import dayjs from "dayjs";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { Post } from "./types";

const BASE_PATH = "/src/blog";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX의 개요 파싱
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join("/");
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const [categoryPath, slug] = filePath.split("/");
  const url = `/blog/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);
  return { url, categoryPath, categoryPublicName, slug };
};

// MDX Detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale("ko")
    .format("YYYY년 MM월 DD일");
  return { ...grayMatter, dateString, content, readingMinutes };
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail } as Post;
};

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split("_")
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(" ");

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: any[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<any[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};

// post 상세 페이지 내용 조회
export const getPostDetail = async (
  category: string,
  slug: string
): Promise<Post> => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};
