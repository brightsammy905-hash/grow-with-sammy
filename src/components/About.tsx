const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            About{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Grow with Sammy
            </span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              At <strong className="text-foreground">Grow with Sammy</strong>, we specialize in helping businesses 
              build a strong online presence. From social media marketing and SEO to branding and website 
              optimization, we craft tailored strategies that deliver real results.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our mission is simple: to help you connect with your target audience, boost engagement, 
              and grow your revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;