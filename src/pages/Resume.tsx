
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>
        
        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          <div className="space-y-6">
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          
          <div className="space-y-6">
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">My Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Photoshop", 
              "Illustrator", "React", "Tailwind CSS", "UI/UX Design"].map((skill) => (
              <div 
                key={skill} 
                className="bg-card/80 border-border rounded-lg py-3 px-4 text-center shadow-sm"
              >
                {skill}
              </div>
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
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Web Development Fundamentals</h4>
                <p className="text-sm text-muted-foreground">Coursera - 2021</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Graphic Design Principles</h4>
                <p className="text-sm text-muted-foreground">Udemy - 2022</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div>
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
