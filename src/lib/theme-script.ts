/**
 * Inlined in <head> so it runs before first paint and the page never flashes
 * the wrong theme: a saved choice wins, otherwise the system preference.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;
