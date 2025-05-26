
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Facebook, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import ParticleBackground from "./ParticleBackground";
import { cn } from "@/lib/utils";
import { ColorSchemeSelector } from "./ColorSchemeSelector";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Message", path: "/message" },
  ];

  const currentIndex = navLinks.findIndex(link => link.path === path);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigate(navLinks[currentIndex - 1].path);
      } else if (e.key === 'ArrowRight' && currentIndex < navLinks.length - 1) {
        navigate(navLinks[currentIndex + 1].path);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, navigate, navLinks]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(navLinks[currentIndex - 1].path);
    }
  };

  const goToNext = () => {
    if (currentIndex < navLinks.length - 1) {
      navigate(navLinks[currentIndex + 1].path);
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Enhanced Profile Navbar */}
        <Card className="bg-card border-border mb-6 shadow-lg overflow-hidden">
          <div className="p-8 h-32 flex items-center justify-between">
            {/* Profile Info */}
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 transform transition-transform duration-300 hover:scale-110">
                  <img 
                    src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                    alt="Samir Bajgain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                    Samir Bajgain
                  </h1>
                  <p className="text-muted-foreground text-sm">Student</p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span>samirbajgain9@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span>+977 9818160291</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Calendar className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  <span>2003</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>
        </Card>
        
        {/* Main Content Area with Navigation */}
        <Card className="bg-card border-border shadow-lg min-h-[600px] overflow-hidden">
          {/* Navigation Bar */}
          <nav className="relative flex justify-between items-center p-6 border-b border-border bg-gradient-to-r from-card to-card/50">
            <div className="flex items-center gap-4 flex-1">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  currentIndex === 0 
                    ? "opacity-50 cursor-not-allowed" 
                    : "hover:bg-primary/20 hover:scale-110"
                )}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Navigation Links */}
              <div className="flex gap-2 overflow-x-auto pb-1 relative flex-1 justify-center">
                {navLinks.map((link, index) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onMouseEnter={() => setHoveredNav(link.name)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className={cn(
                      "relative px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-lg overflow-hidden group",
                      path === link.path 
                        ? "text-primary-foreground shadow-lg transform scale-105" 
                        : "text-muted-foreground hover:text-primary hover:scale-105"
                    )}
                  >
                    {/* Background animation */}
                    <div className={cn(
                      "absolute inset-0 transition-all duration-300",
                      path === link.path
                        ? "bg-gradient-to-r from-primary to-primary/80"
                        : "bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100"
                    )} />
                    
                    {/* Text content */}
                    <span className="relative z-10 font-semibold">{link.name}</span>
                    
                    {/* Active indicator */}
                    {path === link.path && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                    )}
                    
                    {/* Page number indicator */}
                    <div className={cn(
                      "absolute top-1 right-2 text-xs opacity-50 transition-opacity duration-300",
                      hoveredNav === link.name ? "opacity-100" : "opacity-0"
                    )}>
                      {index + 1}
                    </div>
                  </Link>
                ))}
                
                {/* Navigation progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-yellow-500 transition-all duration-500 ease-in-out"
                    style={{ 
                      width: `${((currentIndex + 1) / navLinks.length) * 100}%`,
                      transform: 'translateX(0)'
                    }}
                  />
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={currentIndex === navLinks.length - 1}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  currentIndex === navLinks.length - 1 
                    ? "opacity-50 cursor-not-allowed" 
                    : "hover:bg-primary/20 hover:scale-110"
                )}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Theme controls */}
            <div className="flex items-center gap-4 ml-4">
              <div className="transform transition-transform duration-300 hover:scale-110">
                <ColorSchemeSelector />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-110">
                <ThemeToggle />
              </div>
            </div>
          </nav>
          
          {/* Content */}
          <div className="p-6">
            <div className="transition-all duration-300">
              {children}
            </div>
          </div>
          
          {/* Page indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {navLinks.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary scale-125 shadow-lg" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
