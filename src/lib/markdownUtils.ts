import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const convertMarkdownToHtml = (markdown: string): string => {
  const html = marked.parse(markdown, {
    breaks: true,
    gfm: true,
  });
  return html;
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