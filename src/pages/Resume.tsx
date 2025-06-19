import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  const skillsWithFavicons = [
    {
      name: "HTML",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      proficiency: "90%",
    },
    {
      name: "CSS",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      proficiency: "85%",
    },
    {
      name: "Bootstrap",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      proficiency: "70%",
    },
    {
      name: "JavaScript",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: "80%",
    },
    {
      name: "React",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: "60%",
    },
    {
      name: "Tailwind CSS",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      proficiency: "60%",
    },
    {
      name: "Node.js",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: "30%",
    },
    {
      name: "Python",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: "90%",
    },
    {
      name: "Django",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      proficiency: "85%",
    },
    {
      name: "PHP",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      proficiency: "45%",
    },
    {
      name: "jQuery",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      proficiency: "40%",
    },
    {
      name: "Figma",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      proficiency: "80%",
    },
    {
      name: "Canva",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      proficiency: "80%",
    },
    {
      name: "Firebase",
      favicon: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
      proficiency: "60%",
    },
    {
      name: "Android",
      favicon:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Android_robot_%282014-2019%29.svg/250px-Android_robot_%282014-2019%29.svg.png",
      proficiency: "60%",
    },
    {
      name: "Microsoft Tools",
      favicon:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      proficiency: "95%",
    },
    {
      name: "GitHub",
      favicon: "https://github.githubassets.com/favicons/favicon.svg",
      proficiency: "85%",
    },
    {
      name: "Git",
      favicon: "https://git-scm.com/favicon.ico",
      proficiency: "80%",
    },
    {
      name: "SQL",
      favicon:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      proficiency: "80%",
    },
    {
      name: "PostgreSQL",
      favicon:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      proficiency: "70%",
    }
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
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
                Currently pursuing my bachelor's degree with a focus on web
                development,web designs and database management.
              </p>
            </Card>

            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
                Completed high school education with science stream, focusing on
                mathematics, physics, and computer science.
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
            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                  Freelance Django Developer
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  present
                </span>
              </div>
              <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                Self-employed
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Worked on personal website projects, emphasizing user experience
                and responsive design using HTML, CSS,JavaScript and Django.
              </p>
            </Card>

            <Card className="p-6 bg-card/80 border-border transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
                Create personal project designs, including logos, branding
                materials, and marketing assets. Specialize in minimalist
                aesthetics and clear, impactful visual storytelling.
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
                  animationDuration: `${3 + (index % 3)}s`,
                }}
              >
                <div className="relative">
                  <img
                    src={skill.favicon}
                    alt={skill.name}
                    className="w-10 h-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
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

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="space-y-4">
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
            </Card>

            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
            </Card>
            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
            </Card>

            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
            </Card>

            <Card className="p-4 bg-card/80 border-border flex items-center gap-4 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:-translate-y-2 hover:bg-card/90 hover:border-primary/30 group cursor-pointer">
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
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
