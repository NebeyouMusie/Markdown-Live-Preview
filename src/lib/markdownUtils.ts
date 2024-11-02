import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const convertMarkdownToHtml = (markdown: string): string => {
  // Using marked.parse with a type assertion to handle the return type
  return marked.parse(markdown) as string;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};