import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { copyToClipboard } from "@/lib/markdownUtils";
import { Copy } from "lucide-react";

const Index = () => {
  const [markdown, setMarkdown] = useState("");
  const [scrollRatio, setScrollRatio] = useState(0);
  const { toast } = useToast();

  const handleScroll = (scrollTop: number, scrollHeight: number) => {
    const maxScroll = scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? scrollTop / maxScroll : 0;
    setScrollRatio(ratio);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(markdown);
    
    toast({
      title: success ? "Copied!" : "Failed to copy",
      description: success ? "Markdown copied to clipboard" : "Please try again",
      variant: success ? "default" : "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8 animate-fade-in">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Markdown Previewer</h1>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={handleCopy}
            variant="outline"
            className="gap-2"
          >
            <Copy className="h-4 w-4" />
            Copy
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-16rem)]">
          <div className="h-full">
            <MarkdownEditor
              value={markdown}
              onChange={setMarkdown}
              onScroll={handleScroll}
            />
          </div>
          <div className="h-full">
            <MarkdownPreview
              content={markdown}
              scrollRatio={scrollRatio}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;