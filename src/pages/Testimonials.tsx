
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO, Tech Solutions",
      content: "Samir delivered exceptional work on our website redesign. His attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      avatar: "JS"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director",
      content: "Working with Samir was a pleasure. He understood our requirements perfectly and delivered a beautiful, functional website on time.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Mike Chen",
      position: "Startup Founder",
      content: "Samir's graphic design skills are outstanding. He created a brand identity that perfectly captures our company's vision.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Project Manager",
      content: "Professional, reliable, and creative. Samir's web development skills helped us launch our platform successfully.",
      rating: 5,
      avatar: "ED"
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Product Manager",
      content: "Exceptional quality and timely delivery. Samir's work has significantly improved our user experience and engagement.",
      rating: 5,
      avatar: "DW"
    },
    {
      id: 6,
      name: "Lisa Brown",
      position: "Creative Director",
      content: "Samir's creative vision and technical skills are unmatched. He transformed our ideas into stunning visual designs.",
      rating: 5,
      avatar: "LB"
    }
  ];

  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>
        
        <p className="text-muted-foreground leading-relaxed mb-8">
          Here's what my clients and colleagues have to say about working with me.
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="bg-card/80 border-border p-6 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                      <Quote className="w-6 h-6 text-primary/50 mb-3" />
                      <p className="text-muted-foreground mb-4 italic flex-1">"{testimonial.content}"</p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        {/* Mobile swipe indicator */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-muted-foreground">← Swipe to see more testimonials →</p>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
