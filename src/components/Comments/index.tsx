"use client";
import { useEffect, useRef, useState } from "react";

const Comments = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("src", "https://giscus.app/client.js");
    scriptElement.setAttribute("data-repo", "so1gging/sol-log");
    scriptElement.setAttribute("data-repo-id", "R_kgDOPw24BQ");
    scriptElement.setAttribute("data-category", "Announcements");
    scriptElement.setAttribute("data-category-id", "DIC_kwDOPw24Bc4CwI4n");
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-strict", "0");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute("data-theme", "noborder_light");
    scriptElement.setAttribute("data-lang", "ko");
    scriptElement.setAttribute("data-loading", "lazy");
    scriptElement.setAttribute("crossorigin", "anonymous");
    scriptElement.async = true;

    ref.current?.appendChild(scriptElement);
  }, [mounted]);

  if (!mounted) return null;

  return <div ref={ref} />;
};

export default Comments;
