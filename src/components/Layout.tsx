
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Facebook, Github, Linkedin } from "lucide-react";
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Message", path: "/message" },
  ];

  const currentIndex = navLinks.findIndex(link => link.path === path);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < navLinks.length - 1) {
      // Swipe left - go to next page
      navigate(navLinks[currentIndex + 1].path);
    }
    
    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous page
      navigate(navLinks[currentIndex - 1].path);
    }
  };

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

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Top Profile Navbar */}
        <Card className="bg-card border-border mb-6 shadow-lg overflow-hidden">
          <div className="p-4 flex flex-col md:flex-row items-center gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 transform transition-transform duration-300 hover:scale-110">
                <img 
                  src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                  alt="Samir Bajgain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  Samir Bajgain
                </h1>
                <p className="text-muted-foreground text-sm">Student</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-wrap gap-4 text-xs">
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
            
            {/* Social Media */}
            <div className="flex gap-3 ml-auto">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125 hover:-rotate-12" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12" />
            </div>
          </div>
        </Card>
        
        {/* Main Content Area with Navigation */}
        <Card className="bg-card border-border shadow-lg min-h-[600px] overflow-hidden">
          {/* Interactive Navigation */}
          <nav className="relative flex justify-between items-center p-6 border-b border-border bg-gradient-to-r from-card to-card/50">
            <div className="flex gap-2 overflow-x-auto pb-1 relative">
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
                  
                  {/* Hover glow effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300",
                    "bg-gradient-to-r from-transparent via-white to-transparent",
                    "animate-pulse"
                  )} />
                  
                  {/* Text content */}
                  <span className="relative z-10 font-semibold">{link.name}</span>
                  
                  {/* Active indicator */}
                  {path === link.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" />
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
            
            {/* Theme controls with animation */}
            <div className="flex items-center gap-4">
              <div className="transform transition-transform duration-300 hover:scale-110">
                <ColorSchemeSelector />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-110 hover:rotate-180">
                <ThemeToggle />
              </div>
            </div>
          </nav>
          
          {/* Content with Touch Handlers and Page Transition */}
          <div 
            className="p-6 transition-all duration-500 ease-in-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="animate-fade-in">
              {children}
            </div>
          </div>
          
          {/* Swipe indicators */}
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
