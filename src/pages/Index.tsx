
import { Mail, Phone, MapPin, Calendar, Facebook, Twitter, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 gap-6">
        {/* Left Profile Card */}
        <div className="lg:w-80 flex-shrink-0">
          <Card className="bg-gray-800 border-gray-700 p-6 text-center">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500">
              <img 
                src="/lovable-uploads/c472a97e-1418-4f1c-93b0-f7714d7e53d7.png" 
                alt="Samir Bajgain"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <h1 className="text-2xl font-bold mb-2">Samir Bajgain</h1>
            <p className="text-gray-400 mb-8">Student</p>
            
            {/* Contact Information */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">EMAIL</p>
                  <p className="text-sm">samirbajgain@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">PHONE</p>
                  <p className="text-sm">+977 9818160291</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">BIRTHDAY</p>
                  <p className="text-sm">2003</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">LOCATION</p>
                  <p className="text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-700">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
            </div>
          </Card>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1">
          <Card className="bg-gray-800 border-gray-700 h-full">
            {/* Navigation */}
            <nav className="flex justify-end p-6 border-b border-gray-700">
              <div className="flex gap-8">
                <a href="#" className="text-yellow-500 font-medium">About</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Resume</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Portfolio</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Blog</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Message</a>
              </div>
            </nav>
            
            {/* Content */}
            <div className="p-6">
              {/* About Me Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hi! I'm samir Bajgain & I am currently an undergraduate student in Computer Science and Information Technology 
                    (CSIT) from Tribhuvan University. I have a keen interest in graphic design and web development, with a particular 
                    focus on using Wordpress, HTML, CSS, JavaScript, and PHP.
                  </p>
                  
                  <p>
                    I have experience in using various design software and tools to create logos, websites, and other visual graphics. 
                    In addition to design, I also have a good understanding of web development and have experience in using 
                    Wordpress, HTML, CSS, JavaScript, and PHP to develop websites and applications.
                  </p>
                  
                  <p>
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
                  <Card className="bg-gray-700/50 border-gray-600 p-6 hover:bg-gray-700/70 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-yellow-500 rounded" style={{
                          maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21,15 16,10 5,21\"/></svg>')",
                          maskRepeat: "no-repeat",
                          maskPosition: "center"
                        }}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                        <p className="text-gray-400">The most modern and high-quality design made at a professional level.</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Web Development */}
                  <Card className="bg-gray-700/50 border-gray-600 p-6 hover:bg-gray-700/70 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-yellow-500 rounded" style={{
                          maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16,18 22,12 16,6\"/><polyline points=\"8,6 2,12 8,18\"/></svg>')",
                          maskRepeat: "no-repeat",
                          maskPosition: "center"
                        }}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-400">High-quality development of sites at the professional level.</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Graphics Design */}
                  <Card className="bg-gray-700/50 border-gray-600 p-6 hover:bg-gray-700/70 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-yellow-500 rounded" style={{
                          maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21,15 16,10 5,21\"/></svg>')",
                          maskRepeat: "no-repeat",
                          maskPosition: "center"
                        }}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
                        <p className="text-gray-400">Professional level Graphics design as per your requirements.</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Photography */}
                  <Card className="bg-gray-700/50 border-gray-600 p-6 hover:bg-gray-700/70 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-yellow-500 rounded" style={{
                          maskImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/></svg>')",
                          maskRepeat: "no-repeat",
                          maskPosition: "center"
                        }}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Photography</h3>
                        <p className="text-gray-400">I make high-quality photos of any category at a professional level.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
