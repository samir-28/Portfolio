import Layout from "@/components/Layout";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ExternalLink, Maximize } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const projects: Project[] = [
 {
  id: 1,
  title: "Personal Blog Website",
  category: "web",
  image: "/lovable-uploads/Blog.png",
  description: "A clean and responsive blog platform built with Django, featuring post creation, editing, and user-friendly UI.",
  link: "https://github.com/samir-28/BlogApp",
},
{
  id: 2,
  title: "E-commerce Website",
  category: "web",
  image: "/lovable-uploads/Medidoor.png",
  description: "A full-featured online store with product listings, cart functionality, and checkout system built using modern web tools.",
  link: "https://github.com/samir-28/MediDoorF",
},
{
  id: 3,
  title: "Pick Me App",
  category: "app",
  image: "/lovable-uploads/pickme.png",
  description: "A smart travel-packing assistant that helps users organize and plan items for their trips effortlessly.",
  link: "https://github.com/samir-28/PickMeProject",
},
{
  id: 4,
  title: "Music App",
  category: "app",
  image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A simple and elegant music player app supporting playback features and a minimal UI.",
  link: "https://github.com/samir-28/MusicApp",
},
{
  id: 5,
  title: "Simple Website UI",
  category: "design",
  image: "/lovable-uploads/Page.png",
  description: "Modern and minimal landing page UI design concept with responsive layout and visual clarity.",
  link: "#",
},
{
  id: 6,
  title: "Ecommerce Website Design",
  category: "web",
  image: "/lovable-uploads/hamroshop.png",
  description: "User-friendly and attractive e-commerce website design for an online retail business.",
  link: "#",
},
{
  id: 7,
  title: "Poster Design",
  category: "design",
  image: "/lovable-uploads/MUSTANG.png",
  description: "Bold and dynamic car-themed poster showcasing creativity and layout balance.",
  link: "#",
},
{
  id: 8,
  title: "Event Logo Design",
  category: "design",
  image: "/lovable-uploads/Mind.png",
  description: "Custom logo design crafted for a creative event, combining vibrant colors and modern typography.",
  link: "#",
},
{
  id: 9,
  title: "Brand Logo Design",
  category: "design",
  image: "/lovable-uploads/PACIFIC.png",
  description: "Professional brand identity design for a corporate client, emphasizing trust and clarity.",
  link: "#",
},
{
  id: 10,
  title: "Mountain Landscape",
  category: "photography",
  image: "/lovable-uploads/20250209_164526.jpg",
  description: "Breathtaking Himalayan mountain view captured during golden hour with natural lighting.",
  link: "#",
},
{
  id: 11,
  title: "Fewa Lake with Morning Sunrise",
  category: "photography",
  image: "/lovable-uploads/20250211_072456.jpg",
  description: "Tranquil scene of Fewa Lake at sunrise, capturing serenity and reflection.",
  link: "#",
},
{
  id: 12,
  title: "Rupse Waterfall",
  category: "photography",
  image: "/lovable-uploads/20250207_112709.jpg",
  description: "Powerful capture of Rupse Waterfall with mist and motion frozen in time.",
  link: "#",
},
{
  id: 13,
  title: "Autumn Season Tree",
  category: "photography",
  image: "/lovable-uploads/20250209_111956.jpg",
  description: "Golden leaves falling during autumn, symbolizing change and natural beauty.",
  link: "#",
},
{
  id: 14,
  title: "Dhumba Lake",
  category: "photography",
  image: "/lovable-uploads/20250207_143253.jpg",
  description: "Crystal-clear waters of Dhumba Lake nestled in the Mustang region, rich with cultural and natural essence.",
  link: "#",
}

  ];

  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleViewProject = (project: Project) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank");
    } else {
      window.location.href = "/404";
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={(value) => value && setFilter(value)}
          >
            <ToggleGroupItem
              value="all"
              aria-label="All"
              className="px-4 transition-all duration-300 hover:scale-105"
            >
              All
            </ToggleGroupItem>
            <ToggleGroupItem
              value="web"
              aria-label="Web"
              className="px-4 transition-all duration-300 hover:scale-105"
            >
              Web
            </ToggleGroupItem>
            <ToggleGroupItem
              value="design"
              aria-label="Design"
              className="px-4 transition-all duration-300 hover:scale-105"
            >
              Design
            </ToggleGroupItem>
            <ToggleGroupItem
              value="photography"
              aria-label="Photography"
              className="px-4 transition-all duration-300 hover:scale-105"
            >
              Photography
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/80 border-border cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div
                className="relative w-full aspect-[4/3] bg-muted/20 overflow-hidden rounded-md p-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full h-full overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize
                      className="mx-auto mb-2 animate-pulse"
                      size={24}
                    />
                    <p className="font-medium">View Details</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full capitalize font-medium">
                    {project.category}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative bg-card border border-border rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-muted/20">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
              <button
                className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-90"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium text-primary">Category</p>
                    <p className="text-muted-foreground capitalize">
                      {selectedProject.category}
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium text-primary">Project Date</p>
                    <p className="text-muted-foreground">2023</p>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed">
                  Each project in this portfolio reflects my dedication to
                  building meaningful, user-friendly solutions. Whether it's a
                  web app, mobile design, or visual content, I focus on clean
                  design, efficient performance, and thoughtful user experience
                  — combining creativity with technical skill.
                </p>

                <button
                  onClick={() => handleViewProject(selectedProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;
