import Layout from "@/components/Layout";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Message = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
     const hasURL = /(https?:\/\/|www\.)\S+/i.test(formData.message);
    if (hasURL) {
      toast({
        title: "Links are not allowed in the message",
        description: "Please remove any URLs or website links.",
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/xqablwqj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to send message",
          description: result?.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="w-12 h-1 bg-primary mb-6"></div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-card/80 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name <span className="text-primary">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email <span className="text-primary">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-primary">*</span></Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
