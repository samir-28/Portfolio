import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Facebook,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import SpaceBackground from "./SpaceBackground";
import { cn } from "@/lib/utils";
import { ColorSchemeSelector } from "./ColorSchemeSelector";
import { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Message", path: "/message" },
  ];

  const currentIndex = navLinks.findIndex((link) => link.path === path);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        navigate(navLinks[currentIndex - 1].path);
      } else if (e.key === "ArrowRight" && currentIndex < navLinks.length - 1) {
        navigate(navLinks[currentIndex + 1].path);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
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
      <SpaceBackground />
      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Top Profile Card */}
        <Card className="bg-card mb-6 shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between h-32 xl:h-40 relative">
              {/* Profile Image - Left */}
              <div className="flex items-center">
                <div className="w-[180px] h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl group cursor-pointer relative">
                  <img
                    src="/lovable-uploads/Samir.jpg"
                    alt="Logo"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary/30 rounded-xl transition-all duration-500"></div>
                </div>
              </div>

              {/* Name and Typewriter - Absolute Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <h1 className="text-2xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent whitespace-nowrap">
                  Samir Bajgain
                </h1>
                <div className="text-muted-foreground text-lg xl:text-xl mt-2 h-8 flex items-center justify-center">
                  <TypewriterEffect />
                </div>
              </div>

              {/* Social Icons - Right */}
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.facebook.com/sameer.bajgain.568"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>

                <a
                  href=" https://github.com/samir-28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>

                <a
                  href="https://linkedin.com/in/samir-bajgain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden flex-col items-center gap-6">
              {/* Profile and Social Icons Row */}
              <div className="flex items-center justify-between w-full">
                <div className="w-[180px] h-[180px]rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl group cursor-pointer relative">
                  <img
                    src="/lovable-uploads/Samir.jpg"
                    alt="Samir Bajgain"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary/30 rounded-xl transition-all duration-500"></div>
                </div>

                <div className="flex flex-col items-center flex-1 px-6">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                    Samir Bajgain
                  </h1>
                  <div className="text-muted-foreground text-lg mt-1 h-7 flex items-center justify-center">
                    <TypewriterEffect />
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/sameer.bajgain.568"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                  </a>

                  <a
                    href=" https://github.com/samir-28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                  </a>

                  <a
                    href="https://linkedin.com/in/samir-bajgain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="md:hidden">
              {/* Profile Image - Centered */}
              <div className="flex justify-center mb-4">
                <div className="w-[180px] h-[180px] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl group cursor-pointer relative">
                  <img
                    src="/lovable-uploads/Samir.jpg"
                    alt="Samir Bajgain"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary/30 rounded-xl transition-all duration-500"></div>
                </div>
              </div>

              {/* Name and Typewriter - Centered */}
              <div className="text-center mb-4">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  Samir Bajgain
                </h1>
                <div className="text-muted-foreground text-base mt-1 h-6 flex items-center justify-center">
                  <TypewriterEffect />
                </div>
              </div>

              {/* Social Icons - Centered */}
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.facebook.com/sameer.bajgain.568"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>

                <a
                  href=" https://github.com/samir-28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>

                <a
                  href="https://linkedin.com/in/samir-bajgain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Area with navigation buttons */}
        <div className="relative">
          {/* Previous/Next buttons outside the card border - Hidden on mobile */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={cn(
              "hidden lg:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-lg transition-all duration-300 z-10",
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary/10 hover:text-primary"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === navLinks.length - 1}
            className={cn(
              "hidden lg:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 p-3 rounded-lg transition-all duration-300 z-10",
              currentIndex === navLinks.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary/10 hover:text-primary"
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile navigation buttons - Inside content area */}
          <div className="lg:hidden flex justify-between mb-4">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10 hover:text-primary"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === navLinks.length - 1}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                currentIndex === navLinks.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10 hover:text-primary"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <Card className="bg-card border-border shadow-lg min-h-[600px] overflow-hidden">
            {/* Navigation - Inside main card */}
            <div className="border-b border-border p-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Desktop/Tablet Navigation Links */}
                <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        "group relative text-sm font-medium pb-1 px-2 py-1 rounded transition-colors duration-200",
                        path === link.path
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                      {/* Hover underline animation */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Dropdown Navigation */}
                <div className="sm:hidden flex items-center justify-between w-full">
                  <Menubar className="border-0 bg-transparent p-0">
                    <MenubarMenu>
                      <MenubarTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                        <Menu className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {navLinks.find((link) => link.path === path)?.name ||
                            "Menu"}
                        </span>
                      </MenubarTrigger>
                      <MenubarContent className="w-48 bg-popover border border-border shadow-lg">
                        {navLinks.map((link) => (
                          <MenubarItem key={link.name} asChild>
                            <Link
                              to={link.path}
                              className={cn(
                                "w-full px-3 py-2 text-sm cursor-pointer transition-colors rounded-sm",
                                path === link.path
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "hover:bg-primary/5 hover:text-primary"
                              )}
                            >
                              {link.name}
                            </Link>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>

                  {/* Mobile Theme controls */}
                  <div className="flex gap-2">
                    <ColorSchemeSelector />
                    <ThemeToggle />
                  </div>
                </div>

                {/* Desktop Theme controls */}
                <div className="hidden sm:flex gap-2">
                  <ColorSchemeSelector />
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-6">
              <div className="transition-all duration-300">{children}</div>
            </div>
          </Card>
        </div>

        {/* Footer with contact details and copyright */}
        <Card className="bg-card border-border mt-6 shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4 sm:gap-8 text-sm justify-center sm:justify-start">
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">
                    samirbajgain9@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">+977 9818160291</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors duration-200">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">2003</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                © 2024 Samir Bajgain. Made with
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-4 h-4 ml-1 text-primary"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
             4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 
             14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
