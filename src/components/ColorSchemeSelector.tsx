
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Palette } from "lucide-react";

interface ColorScheme {
  name: string;
  background: string;
  primary: string;
}

const colorSchemes: ColorScheme[] = [
  { name: "Default", background: "#FFEBDO", primary: "#278783" },
  { name: "Cream", background: "#FAF5EE", primary: "#1D503A" },
  { name: "Mint", background: "#DEF8E6", primary: "#D1E0D7" },
  { name: "Blue", background: "#607EBC", primary: "#DDFEF8" },
  { name: "Light", background: "#F7F4F", primary: "#30382F" },
  { name: "Cyan", background: "#6EC6CB", primary: "#E87A64" },
  { name: "Custom", background: "#1325541", primary: "#278783" },
];

export function ColorSchemeSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement;
    
    // Convert hex to HSL for CSS variables
    const hexToHsl = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return "0 0% 50%";
      
      const r = parseInt(result[1], 16) / 255;
      const g = parseInt(result[2], 16) / 255;
      const b = parseInt(result[3], 16) / 255;
      
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
          default: h = 0;
        }
        h /= 6;
      }
      
      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
    };

    const backgroundHsl = hexToHsl(scheme.background);
    const primaryHsl = hexToHsl(scheme.primary);

    root.style.setProperty('--background', backgroundHsl);
    root.style.setProperty('--card', backgroundHsl);
    root.style.setProperty('--popover', backgroundHsl);
    root.style.setProperty('--sidebar-background', backgroundHsl);
    root.style.setProperty('--primary', primaryHsl);
    root.style.setProperty('--sidebar-primary', primaryHsl);
    root.style.setProperty('--ring', primaryHsl);
    root.style.setProperty('--sidebar-ring', primaryHsl);

    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative size-9 rounded-full flex items-center justify-center hover:bg-primary/20"
          title="Change color scheme"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change color scheme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" side="bottom" align="end">
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Color Schemes</h4>
          <div className="grid grid-cols-2 gap-2">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.name}
                onClick={() => applyColorScheme(scheme)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-left transition-colors"
              >
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: scheme.background }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: scheme.primary }}
                  />
                </div>
                <span className="text-xs">{scheme.name}</span>
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
