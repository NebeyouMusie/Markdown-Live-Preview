import { marked } from 'marked';
import hljs from 'highlight.js';

// Configure marked with highlight.js
marked.setOptions({
  langPrefix: 'hljs language-',
  gfm: true,
  breaks: true,
});

export const convertMarkdownToHtml = (markdown: string): string => {
  const html = marked(markdown, {
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
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

export const insertMarkdownSyntax = (
  text: string,
  syntax: string,
  selectionStart: number,
  selectionEnd: number
): string => {
  const before = text.substring(0, selectionStart);
  const selection = text.substring(selectionStart, selectionEnd);
  const after = text.substring(selectionEnd);

  switch (syntax) {
    case 'bold':
      return `${before}**${selection || 'bold text'}**${after}`;
    case 'italic':
      return `${before}_${selection || 'italic text'}_${after}`;
    case 'code':
      return `${before}\`${selection || 'code'}\`${after}`;
    case 'link':
      return `${before}[${selection || 'link text'}](url)${after}`;
    case 'heading':
      return `${before}# ${selection || 'Heading'}${after}`;
    default:
      return text;
  }
};