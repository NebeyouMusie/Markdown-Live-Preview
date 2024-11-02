import { useRef, useEffect } from "react";
import { convertMarkdownToHtml } from "@/lib/markdownUtils";

interface MarkdownPreviewProps {
  content: string;
  scrollRatio: number;
}

export function MarkdownPreview({ content, scrollRatio }: MarkdownPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current && scrollRatio >= 0) {
      const scrollHeight = previewRef.current.scrollHeight - previewRef.current.clientHeight;
      previewRef.current.scrollTop = scrollHeight * scrollRatio;
    }
  }, [scrollRatio]);

  return (
    <div
      ref={previewRef}
      className="h-full overflow-auto bg-editor-bg rounded-lg p-4"
    >
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }}
      />
    </div>
  );
}