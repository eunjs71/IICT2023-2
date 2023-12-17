import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import { useEffect } from "react";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/atom-one-dark.css";

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  //   const getLanguage = (language: string) => {
  //     if (language === "html") return html;
  //     return javascript;
  //   };
  const highlightedCode = hljs.highlight(code, {
    language: language,
  }).value;
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <pre>
      <code
        className="rounded"
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      />
    </pre>
  );
}
