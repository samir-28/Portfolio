
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
      title: "The Future of Web Development in 2023",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      author: "Samir Bajgain",
      date: "May 15, 2023",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Design Principles Every Developer Should Know",
      excerpt: "Understanding fundamental design principles can greatly improve your development work.",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Samir Bajgain",
      date: "April 22, 2023",
      category: "Design",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Getting Started with Three.js for Web Animations",
      excerpt: "Learn how to create impressive 3D animations for your website using Three.js library.",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      author: "Samir Bajgain",
      date: "March 10, 2023",
      category: "Animation",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Optimizing Website Performance for Better User Experience",
      excerpt: "Tips and techniques to improve your website's loading speed and overall performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      author: "Samir Bajgain",
      date: "February 18, 2023",
      category: "Performance",
      readTime: "8 min read",
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
        
        {/* Newsletter Subscription */}
        <Card className="mt-12 p-8 bg-primary/10 border-primary/20">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Subscribe to My Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest articles, tutorials, and resources delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-3 rounded-md border border-border bg-background"
              />
              <button 
                className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              I'll never send you spam or share your email with third parties.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Blog;
