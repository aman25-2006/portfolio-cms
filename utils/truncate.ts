export function truncate(text: string, length = 100) {
  if (text.length <= length) return text;

  return text.substring(0, length) + "...";
}