import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  onScroll: (scrollTop: number, scrollHeight: number) => void;
}

export function MarkdownEditor({ value, onChange, onScroll }: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleScroll = () => {
    if (textareaRef.current) {
      const { scrollTop, scrollHeight } = textareaRef.current;
      onScroll(scrollTop, scrollHeight);
    }
  };

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onScroll={handleScroll}
      placeholder="Enter your Markdown here..."
      className="h-full min-h-[500px] resize-none editor-textarea bg-editor-bg p-4"
    />
  );
}