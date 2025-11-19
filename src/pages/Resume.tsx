import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { BookOpen, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  const skillsWithFavicons = [
    {
      name: "HTML",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "JavaScript",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: ".NET",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Figma",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Microsoft Tools",
      favicon:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Node.js",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "jQuery",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
      name: "Android",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      name: "Firebase",
      favicon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              <div className="relative flex items-start gap-4">
                {/* Timeline Dot */}
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="text-white w-5 h-5" />
                </div>

                <Card className="flex-1 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold mb-1 sm:mb-0 group-hover:text-primary transition-colors duration-300">
                      BSc in Computer Science and Information Technology
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium text-sm">
                    Tribhuvan University
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently pursuing my bachelor's degree with a focus on web
                    development, web designs and database management.
                  </p>
                </Card>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="text-white w-5 h-5" />
                </div>

                <Card className="flex-1 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold mb-1 sm:mb-0 group-hover:text-primary transition-colors duration-300">
                      High School Diploma
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium text-sm">
                    Capital College And Research Center
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Completed high school education with science stream,
                    focusing on mathematics, physics, and computer science.
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              <div className="relative flex items-start gap-4">
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <Briefcase className="text-white w-5 h-5" />
                </div>

                <Card className="flex-1 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold mb-1 sm:mb-0 group-hover:text-primary transition-colors duration-300">
                      Independent Developer – Self-Initiated Projects
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Present
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 font-medium text-sm">
                    Self-employed
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Worked on personal website projects, emphasizing user
                    experience and responsive design using HTML, CSS, Bootstrap , Js, Django and .NET.
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
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
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

        {/* Certifications Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              {[
                {
                  title: "30 Days Python with Django",
                  organization: "Digital Pathshala - 2024",
                },
                {
                  title: "Python Bootcamp",
                  organization: "By Python Users Group Nepal",
                },
                {
                  title: "Sixty Hours Android Workshop Training",
                  organization: "By TechTrix Nepal",
                },
                {
                  title:
                    "National Webinar on B.Sc. CSIT Internship Report Writing",
                  organization: "By treeleaf.ai",
                },
                {
                  title: "Organizer And Core Team Member",
                  organization: "TechTrix-2023",
                },
              ].map((cert, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Award className="text-white w-5 h-5" />
                  </div>

                  <Card className="flex-1 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {cert.organization}
                      </span>
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
