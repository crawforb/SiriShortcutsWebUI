// shared/bridge.js
export function q(name, fallback = null) {
  const u = new URL(window.location.href);
  return u.searchParams.get(name) ?? fallback;
}

export function safeJsonParse(s, fallback = null) {
  try { return JSON.parse(s); } catch { return fallback; }
}

export function buildShortcutsRunUrl(shortcutName, text) {
  const base = "shortcuts://run-shortcut";
  const params = new URLSearchParams();
  params.set("name", shortcutName);
  params.set("input", "text");
  params.set("text", text);
  return `${base}?${params.toString()}`;
}

export function returnToShortcuts(shortcutName, payloadObj) {
  const json = JSON.stringify(payloadObj);
  const encoded = encodeURIComponent(json);
  const url = buildShortcutsRunUrl(shortcutName, encoded);
  window.location.href = url;
}
