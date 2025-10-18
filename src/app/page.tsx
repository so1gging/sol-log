import { getPostList } from "@/lib/utils";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Link from "next/link";

export default async function Home() {
  const postList = await getPostList("record");

  return <div>ss</div>;
}
