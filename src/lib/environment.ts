export function isBrowser() {
  return typeof window !== 'undefined';
}

export function isServer() {
  return !isBrowser();
}
