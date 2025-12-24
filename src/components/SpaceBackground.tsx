import Snowfall from "react-snowfall";
import { useTheme } from "./ThemeProvider";

export default function SnowBackground() {
  const { theme } = useTheme();

  // // Optional: only show in dark mode
  // if (theme !== "dark") return null;

  return (
    <Snowfall
      snowflakeCount={150} // adjust number of snowflakes
      color={theme === "dark" ? "#ffffff" : "#94a3b8"} // white for dark, soft gray for light
      speed={[0.5, 2]} // min and max fall speed
      wind={[-0.5, 0.5]} // horizontal drift
      radius={[0.5, 3]} // size of snowflakes
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // does not block clicks
        zIndex: 40, // behind UI elements
      }}
    />
  );
}
