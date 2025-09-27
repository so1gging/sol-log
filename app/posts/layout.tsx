export default function MaxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <article className="prose prose-slate">{children}</article>
    </div>
  );
}
