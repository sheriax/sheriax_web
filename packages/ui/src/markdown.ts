/**
 * Minimal markdown-to-HTML converter.
 * Handles: headings, paragraphs, bold, links, and unordered lists.
 * No external dependencies.
 */
export function markdownToHtml(md: string): string {
  const lines = md.split('\n');
  const html: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Close list if we're leaving a list context
    if (inList && !line.startsWith('- ')) {
      html.push('</ul>');
      inList = false;
    }

    // Skip empty lines
    if (line.trim() === '') {
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      html.push(`<h1 class="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">${inline(line.slice(2))}</h1>`);
      continue;
    }
    if (line.startsWith('## ')) {
      html.push(`<h2 class="text-lg font-semibold text-gray-900 mt-8 mb-2">${inline(line.slice(3))}</h2>`);
      continue;
    }

    // List items
    if (line.startsWith('- ')) {
      if (!inList) {
        html.push('<ul class="space-y-2 mt-2">');
        inList = true;
      }
      html.push(`<li class="flex gap-2 text-sm text-gray-600 leading-relaxed"><span class="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span><span>${inline(line.slice(2))}</span></li>`);
      continue;
    }

    // Paragraphs
    html.push(`<p class="text-sm text-gray-600 leading-relaxed mt-2">${inline(line)}</p>`);
  }

  // Close any open list
  if (inList) {
    html.push('</ul>');
  }

  return html.join('\n');
}

/** Process inline markdown: **bold**, [links](url) */
function inline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>');
  // Links
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-600 hover:text-brand-700 underline">$1</a>');
  return text;
}
