export function isBrowser() {
  return !isServer();
}

export function isServer() {
  return typeof globalThis.Deno === 'object';
}
