
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Streamlit: The Future of Python Web Apps in 2025",
      excerpt: "Streamlit allows you to turn Python scripts into shareable web apps in minutes. Its simple API handles UI components like sliders, buttons, and charts,automatically updating the app as users interact.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*2VW6RW4f28PZj4hSsEmM2Q.png",
      author: "Samir Bajgain",
      date: "June 19, 2025",
      category: "Python, Web Development",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Django REST Framework: Building Robust APIs in 2025",
      excerpt: " DRF is a powerful and flexible toolkit for building Web APIs on top of Django. It simplifies common tasks like serialization, authentication,and viewsets, allowing developers to focus on writing clean, maintainable API code.",
      image:
        "https://learnbatta.com/assets/images/django/getting-started-with-django-rest-framework.png",
      author: "Samir Bajgain",
      date: "June 19, 2025",
      category: "Python, API Development",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Getting Started with Three.js for Web Animations",
      excerpt: "Learn how to create impressive 3D animations for your website using Three.js library.",
      image: "https://i.ytimg.com/vi/QCS1DOu2IzU/sddefault.jpg",
      author: "Samir Bajgain",
      date: "March 10, 2023",
      category: "Animation & Design",
      readTime: "10 min read",
    },
  ];
  
  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">My Blog</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-border group bg-card/80 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center font-medium text-primary hover:underline">
                  Read more <ArrowRight className="ml-1" size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
