
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  const skillsWithFavicons = [
    { name: "HTML", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "jQuery", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "Figma", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Photoshop", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "Microsoft Tools", favicon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
        </div>
        
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">BSc in Computer Science and Information Technology</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  2020 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">Tribhuvan University</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Currently pursuing my bachelor's degree with a focus on software development, 
                database management, and web technologies.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">High School Diploma</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  2018 - 2020
                </span>
              </div>
              <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">National School of Sciences</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Completed high school education with science stream, focusing on mathematics, physics, and computer science.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">Web Design Intern</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  2022 - 2023
                </span>
              </div>
              <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">Local Design Studio</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Assisted in designing and developing websites for local businesses, focusing on 
                user experience and responsive designs using HTML, CSS, and JavaScript.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">Freelance Graphic Designer</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  2021 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">Self-employed</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Create logos, branding materials, and marketing collateral for various clients.
                Specialize in minimalist design and effective visual communication.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">My Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsWithFavicons.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 bg-card/80 border-border text-center shadow-sm flex flex-col items-center gap-3 transform transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:border-primary/50 group cursor-pointer animate-float"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${3 + (index % 3)}s`
                }}
              >
                <div className="relative">
                  <img 
                    src={skill.favicon} 
                    alt={skill.name}
                    className="w-10 h-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </div>
                <span className="text-sm font-medium group-hover:text-primary group-hover:font-semibold transition-all duration-300">
                  {skill.name}
                </span>
                <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          
          <div className="space-y-4">
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium group-hover:text-primary transition-colors duration-300">Web Development Fundamentals</h4>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">Coursera - 2021</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium group-hover:text-primary transition-colors duration-300">Graphic Design Principles</h4>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">Udemy - 2022</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium group-hover:text-primary transition-colors duration-300">WordPress Development</h4>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">WP Academy - 2022</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
