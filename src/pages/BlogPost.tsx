
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development in 2023",
      content: `
        <p>The web development landscape is constantly evolving, and 2023 has brought us some exciting new trends and technologies that are reshaping how we build applications.</p>
        
        <h3>React Server Components</h3>
        <p>One of the most significant developments is the introduction of React Server Components, which allow developers to build components that render on the server, reducing bundle sizes and improving performance.</p>
        
        <h3>Edge Computing</h3>
        <p>Edge computing is becoming more mainstream, allowing applications to run closer to users for better performance and reduced latency. This is particularly important for global applications.</p>
        
        <h3>TypeScript Adoption</h3>
        <p>TypeScript continues to gain popularity, with more developers adopting it for better code quality and developer experience. The latest versions bring even more powerful type inference capabilities.</p>
        
        <h3>Web3 Integration</h3>
        <p>While still emerging, Web3 technologies are beginning to integrate with traditional web development, opening up new possibilities for decentralized applications.</p>
        
        <p>As we move forward, these technologies will continue to shape the future of web development, making applications faster, more reliable, and more user-friendly.</p>
      `,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      author: "Samir Bajgain",
      date: "May 15, 2023",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Design Principles Every Developer Should Know",
      content: `
        <p>Good design is not just about making things look pretty – it's about creating interfaces that are intuitive, accessible, and effective. Here are some fundamental design principles every developer should understand.</p>
        
        <h3>Visual Hierarchy</h3>
        <p>Visual hierarchy guides users through your content in order of importance. Use size, color, contrast, and spacing to create a clear information hierarchy that helps users understand what to focus on first.</p>
        
        <h3>Consistency</h3>
        <p>Consistent design patterns help users learn your interface quickly. Use consistent colors, typography, spacing, and interaction patterns throughout your application.</p>
        
        <h3>Accessibility</h3>
        <p>Design with accessibility in mind from the start. This includes proper color contrast, keyboard navigation, screen reader support, and clear focus indicators.</p>
        
        <h3>White Space</h3>
        <p>Don't be afraid of white space. It helps reduce cognitive load and makes your content more digestible. White space is not wasted space – it's a powerful design tool.</p>
        
        <h3>User Feedback</h3>
        <p>Always provide clear feedback for user actions. Whether it's a button press, form submission, or loading state, users should always know what's happening.</p>
        
        <p>By following these principles, you'll create interfaces that not only look good but also provide excellent user experiences.</p>
      `,
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Samir Bajgain",
      date: "April 22, 2023",
      category: "Design",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Getting Started with Three.js for Web Animations",
      content: `
        <p>Three.js is a powerful JavaScript library that makes it easy to create and display 3D graphics in web browsers. Whether you want to create interactive visualizations, games, or stunning visual effects, Three.js provides the tools you need.</p>
        
        <h3>Setting Up Three.js</h3>
        <p>Getting started with Three.js is straightforward. You can install it via npm or include it directly in your HTML. The library provides a comprehensive set of tools for 3D rendering.</p>
        
        <h3>Basic Concepts</h3>
        <p>Three.js is built around three main concepts: Scene (what you want to draw), Camera (where you're looking from), and Renderer (how to draw). Understanding these fundamentals is key to working with Three.js effectively.</p>
        
        <h3>Creating Your First Scene</h3>
        <p>Start simple with basic geometric shapes like cubes, spheres, and planes. Learn how to apply materials, textures, and lighting to bring your scenes to life.</p>
        
        <h3>Animation and Interactivity</h3>
        <p>Three.js makes it easy to animate objects and respond to user interactions. You can create smooth animations using the built-in animation loop and respond to mouse and keyboard events.</p>
        
        <h3>Performance Optimization</h3>
        <p>As your scenes become more complex, performance becomes important. Learn about techniques like frustum culling, level of detail, and efficient geometry management.</p>
        
        <p>Three.js opens up a world of creative possibilities for web developers. Start experimenting and see what amazing 3D experiences you can create!</p>
      `,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      author: "Samir Bajgain",
      date: "March 10, 2023",
      category: "Animation",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Optimizing Website Performance for Better User Experience",
      content: `
        <p>Website performance directly impacts user experience, SEO rankings, and conversion rates. Here are proven strategies to optimize your website's performance and keep users engaged.</p>
        
        <h3>Image Optimization</h3>
        <p>Images often account for the majority of a webpage's size. Use modern formats like WebP, implement lazy loading, and serve appropriately sized images for different screen sizes.</p>
        
        <h3>Code Splitting</h3>
        <p>Break your JavaScript bundles into smaller chunks that load only when needed. This reduces initial load times and improves perceived performance.</p>
        
        <h3>Caching Strategies</h3>
        <p>Implement effective caching at multiple levels: browser cache, CDN cache, and server-side cache. This reduces server load and improves response times for returning users.</p>
        
        <h3>Critical CSS</h3>
        <p>Inline critical CSS to eliminate render-blocking resources and improve first contentful paint. Load non-critical CSS asynchronously to avoid blocking page rendering.</p>
        
        <h3>Database Optimization</h3>
        <p>Optimize database queries, use proper indexing, and consider implementing read replicas for high-traffic applications. Slow database queries can significantly impact performance.</p>
        
        <h3>Monitoring and Measurement</h3>
        <p>Use tools like Lighthouse, WebPageTest, and Core Web Vitals to measure performance and identify optimization opportunities. Regular monitoring helps maintain good performance over time.</p>
        
        <p>Performance optimization is an ongoing process. Start with the biggest impact changes and continuously monitor and improve your website's performance.</p>
      `,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      author: "Samir Bajgain",
      date: "February 18, 2023",
      category: "Performance",
      readTime: "8 min read",
    },
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        <Card className="overflow-hidden border-border bg-card/80">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-medium py-2 px-4 rounded-full">
              {post.category}
            </div>
          </div>
          
          <CardContent className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BlogPost;
