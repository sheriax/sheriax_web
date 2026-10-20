import Markdown from "react-markdown";

export function CompanyLegalPage({ content }: { content: string }) {
  return (
    <article className="shell legal-page">
      <Markdown>{content}</Markdown>
    </article>
  );
}
