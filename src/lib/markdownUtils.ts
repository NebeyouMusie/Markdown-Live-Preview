import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const convertMarkdownToHtml = (markdown: string): string => {
  return marked.parse(markdown);
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