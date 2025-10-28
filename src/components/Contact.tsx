import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this would typically send to a backend)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bhanadari.nirwan06@gmail.com",
      href: "mailto:bhanadari.nirwan06@gmail.com",
      color: "text-green-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/evan-bhandari",
      href: "https://www.linkedin.com/in/evan-bhandari-aa7b19218",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/evanbh256",
      href: "https://github.com/evanbh256",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-green-400 mb-8 font-mono">{'>'} Contact</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
              <h3 className="text-amber-200 mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-green-900/20 hover:border-green-900/50 transition-all group"
                  >
                    <link.icon className={`w-5 h-5 ${link.color}`} />
                    <div>
                      <p className="text-gray-400 text-sm">{link.label}</p>
                      <p className="text-gray-300 group-hover:text-green-400 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-green-900/30 rounded-lg p-8">
            <h3 className="text-amber-200 mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-400 text-sm mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/30 border-green-900/30 text-gray-300 focus:border-green-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-gray-400 text-sm mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/30 border-green-900/30 text-gray-300 focus:border-green-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-gray-400 text-sm mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/30 border-green-900/30 text-gray-300 focus:border-green-700 min-h-32"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-green-700/30 hover:bg-green-700/50 text-green-400 border border-green-700/50"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
    </div>
  );
}
