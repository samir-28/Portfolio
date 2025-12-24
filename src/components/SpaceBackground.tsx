import { useTheme } from "./ThemeProvider";

const SpaceBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' 
            : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'
        }`}
      />
      
      {/* Animated stars for dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 opacity-5 ${theme === 'dark' ? 'opacity-10' : 'opacity-5'}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
