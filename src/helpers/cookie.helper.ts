export function setCookie(name: string, value: string, days: number): void {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  
  document.cookie = `${name}=${value}${expires}; path=/`;
}

export function getCookie(name: string): string | null {
  const nameEqual = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(nameEqual) === 0) {
      return cookie.substring(nameEqual.length, cookie.length);
    }
  }
  return null;
}
