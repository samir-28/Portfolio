
import { Link, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Facebook, Twitter, Instagram } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import ParticleBackground from "./ParticleBackground";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const path = location.pathname;

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Message", path: "/message" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <ParticleBackground />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 gap-6 relative z-10">
        {/* Left Profile Card - Vertically centered and sticky */}
        <div className="lg:w-80 flex-shrink-0 lg:sticky lg:top-1/4 lg:self-start">
          <Card className="bg-card border-border p-6 text-center shadow-lg">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/70">
              <img 
                src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                alt="Samir Bajgain"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <h1 className="text-2xl font-bold mb-2">Samir Bajgain</h1>
            <p className="text-muted-foreground mb-8">Student</p>
            
            {/* Contact Information */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">EMAIL</p>
                  <p className="text-sm">samirbajgain9@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">PHONE</p>
                  <p className="text-sm">+977 9818160291</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">BIRTHDAY</p>
                  <p className="text-sm">2003</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">LOCATION</p>
                  <p className="text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-border">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </Card>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1">
          <Card className="bg-card border-border h-full shadow-lg">
            {/* Navigation with ThemeToggle */}
            <nav className="flex justify-end p-6 border-b border-border">
              <div className="flex gap-8 overflow-x-auto pb-1 items-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={cn(
                      "text-sm font-medium transition-colors",
                      path === link.path 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </nav>
            
            {/* Content */}
            <div className="p-6">
              {children}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
