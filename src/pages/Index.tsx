
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

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-justify animate-fade-in transition-all duration-700 hover:text-foreground cursor-pointer transform hover:scale-[1.02]" style={{ animationDelay: '0.2s' }}>
            Hi! I'm Samir Bajgain, an undergraduate student pursuing Computer
            Science and Information Technology [CSIT] at Tribhuvan University.
            I'm a curious and creative individual who enjoys solving problems
            and bringing ideas to life. I thrive in environments where I can
            learn continuously and collaborate with others to create meaningful
            outcomes. Outside of academics, I enjoy exploring new concepts,
            whether it's through reading, traveling or simply observing the
            world around me.
          </p>

          <p className="text-justify animate-fade-in transition-all duration-700 hover:text-foreground cursor-pointer transform hover:scale-[1.02]" style={{ animationDelay: '0.4s' }}>
            My primary interest lies in web development, particularly with
            Django. I have experience building full-stack applications using
            Django and Django REST Framework, and I'm also comfortable working
            with frontend technologies like HTML, CSS, JavaScript, and
            Bootstrap. I enjoy designing efficient, scalable systems and
            developing clean, well-documented code that delivers real value to
            users.
          </p>

          <p className="text-justify animate-fade-in transition-all duration-700 hover:text-foreground cursor-pointer transform hover:scale-[1.02]" style={{ animationDelay: '0.6s' }}>
            Beyond coding, I'm a sports enthusiast who finds energy and balance
            through physical activity and team spirit. I also have a deep
            appreciation for visual design and user experience, often exploring
            tools to create aesthetically pleasing interfaces. I'm committed to
            continuous learning, keeping up with the latest industry trends, and
            growing both personally and professionally. I believe in staying
            active, staying curious, and always striving to deliver work that
            reflects passion and purpose.
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

          {/* Graphics Design */}
          <Card className="p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Palette className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Logo Design & Graphics Design
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  High-quality Logo & Graphics design as per your requirements.
                </p>
              </div>
            </div>
          </Card>

          {/* App Development */}
          <Card className="p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary group cursor-pointer bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Smartphone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  App Development
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  I create high-quality mobile and web applications with modern technologies and user-focused design.
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
