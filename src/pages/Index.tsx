import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Palette, Code, Smartphone, Monitor } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* About Me Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-justify text-base">
          <p
            className="animate-fade-in transition-all duration-700 hover:text-foreground cursor-pointer transform hover:scale-[1.02]"
            style={{ animationDelay: "0.2s" }}
          >
            Hi! I'm Samir Bajgain, an undergraduate CSIT student at Tribhuvan
            University with a strong passion for web development, especially
            using Django. I enjoy solving real-world problems through clean,
            scalable code and have experience building full-stack applications
            with Django and Django REST Framework. I'm also familiar with
            frontend tools like HTML, CSS, JavaScript, and Bootstrap, and I love
            crafting solutions that are both functional and user-friendly.
          </p>

          <p
            className="animate-fade-in transition-all duration-700 hover:text-foreground cursor-pointer transform hover:scale-[1.02]"
            style={{ animationDelay: "0.4s" }}
          >
            Outside coding, I’m a sports enthusiast who also values good design
            and user experience. I believe in continuous learning and building
            things that reflect creativity, purpose, and growth.
          </p>
        </div>
      </div>

      {/* What I'm Doing Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">What I'm Doing</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Web Design */}
          <Card className="p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Monitor className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Web Design
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </div>
          </Card>

          {/* Web Development */}
          <Card className="p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Code className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
