import type { MDXComponents } from "mdx/types";
import Image from "./Image";
import CustomLink from "./Link";
import TableWrapper from "./TableWrapper";

export const components: MDXComponents = {
  Image,
  a: CustomLink,
  table: TableWrapper,
  h1: (props: any) => (
    <h1
      className="text-2xl font-bold tracking-tight text-gray-900 mt-6 mb-2 box-content"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-xl font-semibold tracking-tight text-gray-800 mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-lg font-medium tracking-tight text-gray-700 mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="text-base leading-7 text-gray-600 mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside pl-4 mb-4 text-gray-600" {...props} />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside pl-4 mb-4 text-gray-600"
      {...props}
    />
  ),
};
