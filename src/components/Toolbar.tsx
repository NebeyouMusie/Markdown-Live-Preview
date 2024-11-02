import { Button } from "@/components/ui/button";
import { Bold, Italic, Code, Link, Heading } from "lucide-react";

interface ToolbarProps {
  onFormatClick: (syntax: string) => void;
}

export function Toolbar({ onFormatClick }: ToolbarProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-background border rounded-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFormatClick("bold")}
        className="h-8 w-8"
      >
        <Bold className="h-4 w-4" />
        <span className="sr-only">Bold</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFormatClick("italic")}
        className="h-8 w-8"
      >
        <Italic className="h-4 w-4" />
        <span className="sr-only">Italic</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFormatClick("code")}
        className="h-8 w-8"
      >
        <Code className="h-4 w-4" />
        <span className="sr-only">Code</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFormatClick("link")}
        className="h-8 w-8"
      >
        <Link className="h-4 w-4" />
        <span className="sr-only">Link</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFormatClick("heading")}
        className="h-8 w-8"
      >
        <Heading className="h-4 w-4" />
        <span className="sr-only">Heading</span>
      </Button>
    </div>
  );
}