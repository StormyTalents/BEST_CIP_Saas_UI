// https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/lib/fpixel.js

export function pixelEvent(name: string, options: any = {}): void {
  if (!window.fbq) {
    return;
  }

  window.fbq("track", name, options);
}

export function pixelPageview(): void {
  pixelEvent("PageView");
}
