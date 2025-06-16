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
          <p className="transform transition-all duration-500 hover:scale-105 hover:text-foreground cursor-pointer">
            Hi! I'm Samir Bajgain & I am currently an undergraduate student in Computer Science and Information Technology 
            (CSIT) from Tribhuvan University. I have a keen interest in graphic design and web development, with a particular 
            focus on using Wordpress, HTML, CSS, JavaScript, and PHP.
          </p>
          
          <p className="transform transition-all duration-500 hover:scale-105 hover:text-foreground cursor-pointer">
            I have experience in using various design software and tools to create logos, websites, and other visual graphics. 
            In addition to design, I also have a good understanding of web development and have experience in using 
            Wordpress, HTML, CSS, JavaScript, and PHP to develop websites and applications.
          </p>
          
          <p className="transform transition-all duration-500 hover:scale-105 hover:text-foreground cursor-pointer">
            I am always looking for opportunities to improve my skills and stay up-to-date with the latest trends and 
            technologies in web development. I am a hardworking and motivated individual who is committed to delivering 
            high-quality work to my clients. Overall, I am excited about pursuing a career in the design and development 
            field, where I can use my skills to create meaningful and impactful designs and applications.
          </p>
        </div>
      </div>
      
      {/* What I'm Doing Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">What I'm Doing</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Web Design */}
          <Card className="bg-card/80 border-border p-6 hover:bg-card/90 transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 hover:border-primary/30 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300" style={{
                  maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21,15 16,10 5,21\"/></svg>')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center"
                }}></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Web Design</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">The most modern and high-quality design made at a professional level.</p>
              </div>
            </div>
          </Card>
          
          {/* Web Development */}
          <Card className="bg-card/80 border-border p-6 hover:bg-card/90 transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 hover:border-primary/30 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300" style={{
                  maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16,18 22,12 16,6\"/><polyline points=\"8,6 2,12 8,18\"/></svg>')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center"
                }}></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Web Development</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">High-quality development of sites at the professional level.</p>
              </div>
            </div>
          </Card>
          
          {/* Graphics Design */}
          <Card className="bg-card/80 border-border p-6 hover:bg-card/90 transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 hover:border-primary/30 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300" style={{
                  maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21,15 16,10 5,21\"/></svg>')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center"
                }}></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Graphics Design</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Professional level Graphics design as per your requirements.</p>
              </div>
            </div>
          </Card>
          
          {/* Photography */}
          <Card className="bg-card/80 border-border p-6 hover:bg-card/90 transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 hover:border-primary/30 group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <div className="w-6 h-6 bg-primary rounded group-hover:bg-white transition-colors duration-300" style={{
                  maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/></svg>')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center"
                }}></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Photography</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">I make high-quality photos of any category at a professional level.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
