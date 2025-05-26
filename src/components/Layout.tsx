
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
        {/* Enhanced Navbar */}
        <Card className="bg-card border-border mb-6 shadow-lg overflow-hidden">
          <div className="p-8 h-48 flex items-center justify-between">
            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70">
                <img 
                  src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                  alt="Samir Bajgain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name and Navigation */}
            <div className="flex-1 flex flex-col items-center gap-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  Samir Bajgain
                </h1>
                <p className="text-muted-foreground text-lg">Student</p>
              </div>
              
              {/* Navigation Links */}
              <div className="flex items-center gap-4">
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
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className={cn(
                        "px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-lg",
                        path === link.path 
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg" 
                          : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                      )}
                    >
                      <span className="font-semibold">{link.name}</span>
                    </Link>
                  ))}
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
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Vertical Icons and Theme controls */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-3">
                <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                <Github className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
              </div>
              <div className="flex flex-col gap-2">
                <ColorSchemeSelector />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Card>
        
        {/* Main Content Area */}
        <Card className="bg-card border-border shadow-lg min-h-[600px] overflow-hidden">
          <div className="p-6">
            <div className="transition-all duration-300">
              {children}
            </div>
          </div>
        </Card>
        
        {/* Footer */}
        <Card className="bg-card border-border mt-6 shadow-lg overflow-hidden">
          <div className="p-6 flex items-center justify-center">
            <div className="flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary" />
                <span>samirbajgain9@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary" />
                <span>+977 9818160291</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                <Calendar className="w-4 h-4 text-primary" />
                <span>2003</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
