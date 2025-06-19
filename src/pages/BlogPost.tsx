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
      title: "Streamlit: The Future of Python Web Apps in 2025",
      content: `
    <p>
      Python developers have long dreamed of creating beautiful, interactive web applications without having to learn complex front-end frameworks.
      Enter <strong>Streamlit</strong>, a game-changing open-source library that lets you build data apps and dashboards quickly — using pure Python.
    </p>
    
    <h3>What is Streamlit?</h3>
    <p>
      Streamlit allows you to turn Python scripts into shareable web apps in minutes. Its simple API handles UI components like sliders, buttons, and charts,
      automatically updating the app as users interact.
    </p>
    
    <h3>Why Streamlit is Gaining Momentum</h3>
    <p>
      With its easy-to-learn syntax and seamless integration with popular data science libraries like <code>pandas</code>, <code>matplotlib</code>, and
      <code>plotly</code>, Streamlit empowers analysts, researchers, and developers to quickly prototype and deploy applications.
    </p>
    
    <h3>Latest Features in Streamlit 1.35+</h3>
    <p>
      The latest versions of Streamlit bring enhanced performance, new components like the <code>st.chat_input</code> widget for building chatbots, better
      theming options, and improved support for asynchronous operations.
    </p>
    
    <h3>Use Case: Building a ChatGPT-Powered Assistant</h3>
    <p>
      One exciting use of Streamlit is integrating AI models such as OpenAI's GPT. By combining Streamlit's UI components with GPT APIs, you can create interactive
      assistants, automated report generators, or intelligent data explorers with just a few lines of code.
    </p>
    
    <h3>Deploying Your Streamlit App</h3>
    <p>
      Once your app is ready, you can deploy it on platforms like <strong>Streamlit Community Cloud</strong>, <strong>Render</strong>, or <strong>Hugging Face Spaces</strong>
      with minimal configuration — making it accessible to anyone via a web link.
    </p>
    
    <p>
      Streamlit is truly democratizing web app development for Python users, bridging the gap between data science and software engineering. Whether you're a beginner
      or a pro, Streamlit offers an incredible platform to bring your ideas to life.
    </p>
  `,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*2VW6RW4f28PZj4hSsEmM2Q.png",
      author: "Samir Bajgain",
      date: "April 24, 2025",
      category: "Python, Web Development",
      readTime: "6 min read",
    },

    {
      id: 2,
      title: "Django REST Framework: Building Robust APIs in 2025",
      content: `
    <p>
      APIs are the backbone of modern web and mobile applications, and <strong>Django REST Framework (DRF)</strong> remains one of the most popular tools
      for building powerful, flexible RESTful APIs in Python.
    </p>

    <h3>What is Django REST Framework?</h3>
    <p>
      DRF is a powerful and flexible toolkit for building Web APIs on top of Django. It simplifies common tasks like serialization, authentication,
      and viewsets, allowing developers to focus on writing clean, maintainable API code.
    </p>

    <h3>Why DRF Continues to Lead</h3>
    <p>
      Its comprehensive feature set, extensive documentation, and a thriving community make DRF the go-to choice for Python developers. It integrates
      seamlessly with Django’s ORM, making complex queries and nested relationships easy to handle.
    </p>

    <h3>Latest Features in DRF 3.16+</h3>
    <p>
      The latest DRF release introduces improved support for Django 5.2 and Python 3.14, enhanced validation with nullable unique constraints,
      and better async views support to help you build more responsive APIs.
    </p>

    <h3>Use Case: Secure, Scalable API for Modern Apps</h3>
    <p>
      DRF empowers you to build secure and scalable APIs for web and mobile apps with features like token and session authentication,
      throttling, permissions, and pagination out of the box. You can rapidly build everything from simple CRUD APIs to complex multi-tenant systems.
    </p>

    <h3>Deploying Your DRF API</h3>
    <p>
      Deploy your API easily on platforms like <strong>Heroku</strong>, <strong>Render</strong>, or cloud providers such as <strong>AWS</strong> and
      <strong>Google Cloud Platform</strong>. Combine with containerization (Docker) and CI/CD pipelines for streamlined delivery.
    </p>

    <p>
      Django REST Framework remains a cornerstone in the Python ecosystem, giving developers the tools to build reliable APIs quickly,
      whether you're building internal tools or public-facing services.
    </p>
  `,
      image:
        "https://learnbatta.com/assets/images/django/getting-started-with-django-rest-framework.png",
      author: "Samir Bajgain",
      date: "June 19, 2025",
      category: "Python, API Development",
      readTime: "7 min read",
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <h2 className="text-2xl font-bold mb-6">Blog Post Not Found</h2>
          <iframe
            src="https://lottie.host/embed/3213e956-a191-478c-85a9-bc2dd8adab50/Hat8kmYUoP.lottie"
            title="Not Found Animation"
            className="w-64 h-64 mb-8"
            style={{ border: "none" }}
            allowFullScreen
          />
          <Link
            to="/blog"
            className="text-primary hover:underline text-lg font-medium"
          >
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>

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
