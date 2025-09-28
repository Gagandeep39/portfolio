// Reusable renderer for timeline sections
export function renderTimeline(container, items, mapItemToHtml) {
  if (!container || !Array.isArray(items)) return;
  container.innerHTML = items.map(mapItemToHtml).join('');
}
