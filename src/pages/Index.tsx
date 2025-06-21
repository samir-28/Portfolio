
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* About Me Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="transform transition-all duration-500 hover:scale-10 hover:text-foreground cursor-pointer">
            Hi! I'm Samir Bajgain, an undergraduate student pursuing Computer
            Science and Information Technology [CSIT] at Tribhuvan University.
            I'm a curious and creative individual who enjoys solving problems
            and bringing ideas to life. I thrive in environments where I can
            learn continuously and collaborate with others to create meaningful
            outcomes. Outside of academics, I enjoy exploring new concepts,
            whether it's through reading, traveling or simply observing the
            world around me.
          </p>

          <p className="transform transition-all duration-500 hover:scale-10 hover:text-foreground cursor-pointer">
            My primary interest lies in web development, particularly with
            Django. I have experience building full-stack applications using
            Django and Django REST Framework, and I'm also comfortable working
            with frontend technologies like HTML, CSS, JavaScript, and
            Bootstrap. I enjoy designing efficient, scalable systems and
            developing clean, well-documented code that delivers real value to
            users.
          </p>

          <p className="transform transition-all duration-500 hover:scale-10 hover:text-foreground cursor-pointer">
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
          <Card className="p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div
                  className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300"
                  style={{
                    maskImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>\')',
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Web Design
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </div>
          </Card>

          {/* Web Development */}
          <Card className="p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div
                  className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300"
                  style={{
                    maskImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>\')',
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </Card>

          {/* Graphics Design */}
          <Card className="p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div
                  className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300"
                  style={{
                    maskImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>\')',
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  Logo Design & Graphics Design
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  High-quality Logo & Graphics design as per your requirements.
                </p>
              </div>
            </div>
          </Card>

          {/* App Development */}
          <Card className="p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div
                  className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300"
                  style={{
                    maskImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>\')',
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  App Development
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
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
