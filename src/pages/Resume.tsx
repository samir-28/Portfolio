
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

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                
                <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold mb-2 sm:mb-0">
                      BSc in Computer Science and Information Technology
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">
                    Tribhuvan University
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently pursuing my bachelor's degree with a focus on web development, web designs and database management.
                  </p>
                </Card>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                
                <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold mb-2 sm:mb-0">
                      High School Diploma
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">
                    Capital College And Research Center
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white w-6 h-6" />
                </div>
                
                <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold mb-2 sm:mb-0">
                      Freelance Django Developer
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">
                    Self-employed
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Worked on personal website projects, emphasizing user experience and responsive design using HTML, CSS, JavaScript and Django.
                  </p>
                </Card>
              </div>

              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white w-6 h-6" />
                </div>
                
                <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold mb-2 sm:mb-0">
                      Freelance Graphic Designer
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">
                    Self-employed
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create personal project designs, including logos, branding materials, and marketing assets. Specialize in minimalist aesthetics and clear, impactful visual storytelling.
                  </p>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsWithFavicons.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-4 text-center shadow-sm flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/50 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={skill.favicon}
                    alt={skill.name}
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.proficiency}
                </span>
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

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              {[
                {
                  title: "30 Days Python with Django",
                  organization: "Digital Pathshala - 2024"
                },
                {
                  title: "Python Bootcamp",
                  organization: "By Python Users Group Nepal"
                },
                {
                  title: "Sixty Hours Android Workshop Training",
                  organization: "By TechTrix Nepal"
                },
                {
                  title: "National Webinar on B.Sc. CSIT Internship Report Writing",
                  organization: "By treeleaf.ai"
                },
                {
                  title: "Organizer And Core Team Member",
                  organization: "TechTrix-2023"
                }
              ].map((cert, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  
                  <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="text-primary w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">
                          {cert.title}
                        </h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {cert.organization}
                        </span>
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
