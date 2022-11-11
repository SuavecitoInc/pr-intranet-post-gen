import { useEffect, useMemo, useState } from "react";

function useTheme() {
  let defaultTheme = "dark";
  const [theme, setTheme] = useState(defaultTheme);
  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    defaultTheme = "light";
    setTheme(defaultTheme);
  }

  useEffect(() => {
    const themeHandler = (e: any) => {
      const colorScheme = e.matches ? "dark" : "light";
      setTheme(colorScheme);
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", themeHandler);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", themeHandler);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return value;
}

export default useTheme;
