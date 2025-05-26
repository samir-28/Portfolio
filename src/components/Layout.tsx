
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

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Top Profile Navbar */}
        <Card className="bg-card border-border mb-6 shadow-lg">
          <div className="p-4 flex flex-col md:flex-row items-center gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70">
                <img 
                  src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                  alt="Samir Bajgain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Samir Bajgain</h1>
                <p className="text-muted-foreground text-sm">Student</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>samirbajgain9@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+977 9818160291</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>2003</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 ml-auto">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </Card>
        
        {/* Main Content Area with Navigation */}
        <Card className="bg-card border-border shadow-lg min-h-[600px]">
          {/* Navigation with ThemeToggle and ColorSchemeSelector */}
          <nav className="flex justify-between items-center p-6 border-b border-border">
            <div className="flex gap-8 overflow-x-auto pb-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={cn(
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    path === link.path 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ColorSchemeSelector />
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Content with Touch Handlers */}
          <div 
            className="p-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {children}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
