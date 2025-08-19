import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Build awareness and engage with the right audience."
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher on Google and get found easily."
    },
    {
      title: "Branding & Content Creation",
      description: "Tell your story with impactful content."
    },
    {
      title: "Website Design & Optimization",
      description: "Turn visitors into loyal customers."
    },
    {
      title: "Digital Advertising",
      description: "Reach more people through Facebook, Instagram, and Google Ads."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Our{" "}
              <span className="text-transparent bg-gradient-primary bg-clip-text">
                Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;