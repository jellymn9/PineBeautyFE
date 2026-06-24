export function saveToSessionStorage(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function getFromSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}

export function removeFromSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}
