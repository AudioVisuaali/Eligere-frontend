const MATCH_URL = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;

export function getVideoSlug(url) {
  if (!url) return '';

  const canPlay = MATCH_URL.test(url);
  if (!canPlay) {
    return '';
  }

  return url.match(MATCH_URL)[1];
}
