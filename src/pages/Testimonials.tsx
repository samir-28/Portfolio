import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Saurab Kunwar",
      position: "Computer Science Student",
      content:
        "Samir helped me understand SQL with practical examples. His guidance made my  project much easier to complete.",
      rating: 4,
      avatar: "SK",
    },
    {
      id: 2,
      name: "Sangit Gharti Magar",
      position: "Computer Science Student",
      content:
        "Thanks to Samir’s mentorship, I successfully built my practical exam project using DRF and Python with his support.",
      rating: 5,
      avatar: "SGM",
    },
    {
      id: 3,
      name: "Sumit Thapa",
      position: "Computer Science Student",
      content:
        "Samir provided invaluable support for my django  project, explaining  concepts clearly and helping me debug my code.",
      rating: 4,
      avatar: "ST",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = () => {
    console.log("Previous button clicked");
    api?.scrollPrev();
  };

  const scrollNext = () => {
    console.log("Next button clicked");
    api?.scrollNext();
  };

  return (
    <Layout>
      <div className="mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Here's what my clients and colleagues have to say about working with
          me.
        </p>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <Card
                    className="bg-card/80 backdrop-blur border-border p-6 hover:bg-card/90 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 h-full animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 hover-scale">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col h-full">
                        <Quote className="w-6 h-6 text-primary/50 mb-3 animate-pulse" />
                        <p className="text-muted-foreground mb-4 italic flex-1">
                          "{testimonial.content}"
                        </p>

                        <div className="mt-auto">
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-500 text-yellow-500 animate-scale-in"
                                style={{ animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Desktop Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 rounded-full bg-background/80 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 rounded-full bg-background/80 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Carousel>

          {/* Enhanced Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-3">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index + 1 === current
                      ? "bg-primary shadow-lg shadow-primary/50"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => {
                    console.log(`Dot ${index} clicked`);
                    api?.scrollTo(index);
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Enhanced slide indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground animate-fade-in">
              <span className="text-primary font-semibold">{current}</span> of{" "}
              <span className="text-primary font-semibold">{count}</span>
            </p>
          </div>
        </div>

        {/* Mobile swipe indicator with animation */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs text-muted-foreground opacity-75 animate-pulse">
            ← Swipe or use buttons to navigate →
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
