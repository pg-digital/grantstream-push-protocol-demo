"use client";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type Theme = "light" | "dark" | "system";

export function AppThemeToggle() {
  const { setTheme } = useTheme();

  const onThemeSelect = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onThemeSelect("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onThemeSelect("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onThemeSelect("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
