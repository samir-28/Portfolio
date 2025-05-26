
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  const skillsWithFavicons = [
    { name: "HTML", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "WordPress", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Photoshop", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
    { name: "Illustrator", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" },
    { name: "React", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "UI/UX Design", favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
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
            <Card className="p-6 bg-card/80 border-border">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium">BSc in Computer Science and Information Technology</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  2020 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2">Tribhuvan University</p>
              <p className="text-sm text-muted-foreground">
                Currently pursuing my bachelor's degree with a focus on software development, 
                database management, and web technologies.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 border-border">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium">High School Diploma</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  2018 - 2020
                </span>
              </div>
              <p className="text-muted-foreground mb-2">National School of Sciences</p>
              <p className="text-sm text-muted-foreground">
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
            <Card className="p-6 bg-card/80 border-border">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium">Web Design Intern</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  2022 - 2023
                </span>
              </div>
              <p className="text-muted-foreground mb-2">Local Design Studio</p>
              <p className="text-sm text-muted-foreground">
                Assisted in designing and developing websites for local businesses, focusing on 
                user experience and responsive designs using HTML, CSS, and JavaScript.
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 border-border">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium">Freelance Graphic Designer</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  2021 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2">Self-employed</p>
              <p className="text-sm text-muted-foreground">
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsWithFavicons.map((skill) => (
              <Card key={skill.name} className="p-4 bg-card/80 border-border text-center shadow-sm flex flex-col items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <img 
                  src={skill.favicon} 
                  alt={skill.name}
                  className="w-8 h-8 transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
                  }}
                />
                <span className="text-sm font-medium">{skill.name}</span>
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
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Web Development Fundamentals</h4>
                <p className="text-sm text-muted-foreground">Coursera - 2021</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Graphic Design Principles</h4>
                <p className="text-sm text-muted-foreground">Udemy - 2022</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">WordPress Development</h4>
                <p className="text-sm text-muted-foreground">WP Academy - 2022</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
