
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  const skillsWithFavicons = [
    {
      name: "HTML",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      proficiency: "90%",
    },
    {
      name: "CSS",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      proficiency: "85%",
    },
    {
      name: "Bootstrap",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      proficiency: "70%",
    },
    {
      name: "JavaScript",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: "80%",
    },
    {
      name: "React",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: "60%",
    },
    {
      name: "Tailwind CSS",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      proficiency: "60%",
    },
    {
      name: "Node.js",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: "30%",
    },
    {
      name: "Python",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: "90%",
    },
    {
      name: "Django",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      proficiency: "85%",
    },
    {
      name: "PHP",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      proficiency: "45%",
    },
    {
      name: "jQuery",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      proficiency: "40%",
    },
    {
      name: "Figma",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      proficiency: "80%",
    },
    {
      name: "Canva",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      proficiency: "80%",
    },
    {
      name: "Photoshop",
      favicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      proficiency: "75%",
    },
    {
      name: "Microsoft Tools",
      favicon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      proficiency: "95%",
    },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      BSc in Computer Science and Information Technology
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    Tribhuvan University
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Currently pursuing my bachelor's degree with a focus on web development, web designs and database management.
                  </p>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      High School Diploma
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    Capital College And Research Center
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Completed high school education with science stream, focusing on mathematics, physics, and computer science.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      Freelance Django Developer
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    Self-employed
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Worked on personal website projects, emphasizing user experience and responsive design using HTML, CSS, JavaScript and Django.
                  </p>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      Freelance Graphic Designer
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    Self-employed
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Create personal project designs, including logos, branding materials, and marketing assets. Specialize in minimalist aesthetics and clear, impactful visual storytelling.
                  </p>
                </Card>
              </div>
            </div>
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
                  animationDuration: `${3 + (index % 3)}s`,
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
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {skill.proficiency}
                </span>
                <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Award className="text-white w-4 h-4" />
                </div>
                
                <Card className="flex-1 p-4 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                        30 Days Python with Django
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        Digital Pathshala - 2024
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Award className="text-white w-4 h-4" />
                </div>
                
                <Card className="flex-1 p-4 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                        Python Bootcamp
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        By Python Users Group Nepal
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Award className="text-white w-4 h-4" />
                </div>
                
                <Card className="flex-1 p-4 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                        Sixty Hours Android Workshop Training
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        By TechTrix Nepal
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Award className="text-white w-4 h-4" />
                </div>
                
                <Card className="flex-1 p-4 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                        National Webinar on B.Sc. CSIT Internship Report Writing
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        By treeleaf.ai
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Award className="text-white w-4 h-4" />
                </div>
                
                <Card className="flex-1 p-4 bg-card/80 border-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="text-primary w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-300">
                        Organizer And Core Team Member
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        TechTrix-2023
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
