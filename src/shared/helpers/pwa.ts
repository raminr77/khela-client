export function isLocal(): boolean {
  return ['localhost', '127.0.0.1'].includes(location.hostname);
}

export function isAppInstalled(): boolean {
  const isStandalone: boolean = !!(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone
    )
  );
  return isStandalone && !isLocal();
}
