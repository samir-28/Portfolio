
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
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start gap-8 group">
                {/* Enhanced Timeline Dot */}
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <BookOpen className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                
                <Card className="flex-1 p-8 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-card hover:to-card/80 hover:border-primary/30 group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        BSc in Computer Science and Information Technology
                      </h4>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm">
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3 font-medium group-hover:text-muted-foreground/90 transition-colors duration-300">
                      Tribhuvan University
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      Currently pursuing my bachelor's degree with a focus on web development, web designs and database management.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-8 group">
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <BookOpen className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                
                <Card className="flex-1 p-8 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-card hover:to-card/80 hover:border-primary/30 group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        High School Diploma
                      </h4>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-sm">
                        2020 - 2022
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3 font-medium group-hover:text-muted-foreground/90 transition-colors duration-300">
                      Capital College And Research Center
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      Completed high school education with science stream, focusing on mathematics, physics, and computer science.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start gap-8 group">
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <Briefcase className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                
                <Card className="flex-1 p-8 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-card hover:to-card/80 hover:border-primary/30 group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        Freelance Django Developer
                      </h4>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-green-400/10 text-green-600 group-hover:from-green-500 group-hover:to-green-400 group-hover:text-white transition-all duration-300 shadow-sm">
                        Present
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3 font-medium group-hover:text-muted-foreground/90 transition-colors duration-300">
                      Self-employed
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      Worked on personal website projects, emphasizing user experience and responsive design using HTML, CSS, JavaScript and Django.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="relative flex items-start gap-8 group">
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <Briefcase className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                </div>
                
                <Card className="flex-1 p-8 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-card hover:to-card/80 hover:border-primary/30 group cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        Freelance Graphic Designer
                      </h4>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-green-400/10 text-green-600 group-hover:from-green-500 group-hover:to-green-400 group-hover:text-white transition-all duration-300 shadow-sm">
                        Present
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3 font-medium group-hover:text-muted-foreground/90 transition-colors duration-300">
                      Self-employed
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      Create personal project designs, including logos, branding materials, and marketing assets. Specialize in minimalist aesthetics and clear, impactful visual storytelling.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-8">
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
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "30 Days Python with Django",
                  organization: "Digital Pathshala - 2024",
                  color: "from-blue-500/20 to-blue-400/10 text-blue-600 group-hover:from-blue-500 group-hover:to-blue-400"
                },
                {
                  title: "Python Bootcamp",
                  organization: "By Python Users Group Nepal",
                  color: "from-yellow-500/20 to-yellow-400/10 text-yellow-600 group-hover:from-yellow-500 group-hover:to-yellow-400"
                },
                {
                  title: "Sixty Hours Android Workshop Training",
                  organization: "By TechTrix Nepal",
                  color: "from-green-500/20 to-green-400/10 text-green-600 group-hover:from-green-500 group-hover:to-green-400"
                },
                {
                  title: "National Webinar on B.Sc. CSIT Internship Report Writing",
                  organization: "By treeleaf.ai",
                  color: "from-purple-500/20 to-purple-400/10 text-purple-600 group-hover:from-purple-500 group-hover:to-purple-400"
                },
                {
                  title: "Organizer And Core Team Member",
                  organization: "TechTrix-2023",
                  color: "from-red-500/20 to-red-400/10 text-red-600 group-hover:from-red-500 group-hover:to-red-400"
                }
              ].map((cert, index) => (
                <div key={index} className="relative flex items-start gap-8 group">
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                    <Award className="text-white w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                  </div>
                  
                  <Card className="flex-1 p-6 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-card hover:to-card/80 hover:border-primary/30 group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 transition-all duration-500 shadow-sm">
                          <Award className="text-primary w-6 h-6 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                            {cert.title}
                          </h4>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${cert.color} group-hover:text-white transition-all duration-300 shadow-sm`}>
                            {cert.organization}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
