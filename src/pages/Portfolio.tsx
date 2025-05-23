
import Layout from "@/components/Layout";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ExternalLink, Maximize } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const { theme } = useTheme();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Blog",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description: "A responsive personal blog built with WordPress",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Online store with product catalog and checkout system",
      link: "#",
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Complete branding package for a local coffee shop",
      link: "#",
    },
    {
      id: 4,
      title: "Mobile App UI",
      category: "design",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "UI/UX design for a fitness tracking mobile application",
      link: "#",
    },
    {
      id: 5,
      title: "Mountain Landscape",
      category: "photography",
      image: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1517&q=80",
      description: "Himalayan mountain range captured at sunrise",
      link: "#",
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
      description: "Professional website for a consulting company",
      link: "#",
    },
  ];

  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value)}>
            <ToggleGroupItem value="all" aria-label="All" className="px-4">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="web" aria-label="Web" className="px-4">
              Web
            </ToggleGroupItem>
            <ToggleGroupItem value="design" aria-label="Design" className="px-4">
              Design
            </ToggleGroupItem>
            <ToggleGroupItem value="photography" aria-label="Photography" className="px-4">
              Photography
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-card/80 border-border cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <Maximize className="mx-auto mb-2" size={24} />
                    <p className="font-medium">View Details</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative bg-card border border-border rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-card/80 rounded-full p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-muted-foreground capitalize">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="font-medium">Project Date</p>
                    <p className="text-muted-foreground">2023</p>
                  </div>
                </div>
                
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
                  a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. 
                  Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                </p>
                
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;
