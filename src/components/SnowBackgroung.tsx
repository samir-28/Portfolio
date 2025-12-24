import Snowfall from "react-snowfall";
import { useTheme } from "./ThemeProvider";

export default function SnowBackground() {
  const { theme } = useTheme(); // call hook here, before JSX

  return (
    <Snowfall
      snowflakeCount={150}
      color={theme === "dark" ? "#ffffff" : "#94a3b8"} // use theme here
      speed={[0.5, 2]}
      wind={[-0.5, 0.5]}
      radius={[0.5, 3]}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />
  );
}