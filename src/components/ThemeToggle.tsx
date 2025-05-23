
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn(
        "relative size-10 rounded-full flex items-center justify-center",
        className
      )}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all",
          theme === "dark" ? "scale-0 absolute" : "scale-100"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 transition-all",
          theme === "dark" ? "scale-100" : "scale-0 absolute"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
