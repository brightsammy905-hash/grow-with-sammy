import { Target, DollarSign, HeadphonesIcon, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "Professional & Results-Driven Strategies",
      description: "Data-backed approaches that deliver measurable growth"
    },
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description: "Tailored solutions that fit your business budget"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support & Consultation",
      description: "Always here when you need guidance and support"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Helping businesses achieve sustainable growth"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose{" "}
              <span className="text-transparent bg-gradient-secondary bg-clip-text">
                Us?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to your success with proven strategies and dedicated support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-primary p-3 rounded-lg shadow-button group-hover:shadow-glow transition-all">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
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

export default WhyChooseUs;