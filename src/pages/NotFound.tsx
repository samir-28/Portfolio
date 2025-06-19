import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
        <div className="w-16 h-1 bg-primary mb-6" />
        {/* Animation */}
        <div className="w-72 h-72 mb-6">
          <iframe 
            src="https://lottie.host/embed/b4914086-b547-4571-8844-1556d4e4cdb7/woqAqKgYEx.lottie" 
            style={{ width: "100%", height: "100%", border: "none" }}
            allowFullScreen
            title="Funny 404 Animation"
          />
        </div>
        {/* Heading */}

        {/* Message */}
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Whoops! Looks like you took a wrong turn somewhere in the multiverse 🌀
        </p>

        {/* Back to Home Button */}
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
