
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
        <div className="w-12 h-1 bg-primary mb-8"></div>
        
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
