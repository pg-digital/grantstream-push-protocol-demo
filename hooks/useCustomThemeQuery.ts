import { useTheme } from "next-themes";

export function useCustomThemeQuery() {
  const { theme, systemTheme } = useTheme();

  const isThemeDark =
    theme === "system" ? systemTheme === "dark" : theme === "dark";

  const isThemeLight =
    theme === "system" ? systemTheme === "light" : theme === "light";

  return {
    isThemeDark,
    isThemeLight,
  };
}
