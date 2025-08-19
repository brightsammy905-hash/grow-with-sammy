import { Button } from "@/components/ui/enhanced-button";
import { Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Grow Your Business with Expert Digital Marketing",
      subtitle: "We help brands increase visibility, attract customers, and generate more sales through proven online strategies.",
      cta: "👉 Let's Start Growing Your Business Today"
    },
    {
      title: "Dominate Search Results with Expert SEO",
      subtitle: "Get found by your ideal customers on Google. Our proven SEO strategies help you rank higher and drive organic traffic.",
      cta: "🔍 Boost Your Search Rankings Now"
    },
    {
      title: "Social Media Marketing That Converts",
      subtitle: "Build brand awareness and engage your audience across Facebook, Instagram, and LinkedIn with content that drives results.",
      cta: "📱 Grow Your Social Presence Today"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Header with Logo */}
      <header className="relative z-10 w-full py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5c4732eb-5537-481d-b764-7c1959eeef5c.png" 
              alt="KA Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>
      
      {/* Hero Content with Slides */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Digital Marketing Growth" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        {/* Slide Navigation */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-500">
              {slides[currentSlide].title.split(' Expert Digital Marketing')[0]}{" "}
              <span className="text-transparent bg-gradient-secondary bg-clip-text">
                {slides[currentSlide].title.includes('Expert Digital Marketing') ? 'Expert Digital Marketing' : 
                 slides[currentSlide].title.includes('Expert SEO') ? 'Expert SEO' :
                 'Social Media Marketing'}
              </span>
              {slides[currentSlide].title.split('Expert SEO')[1] || slides[currentSlide].title.split('Social Media Marketing')[1] || ''}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="cta" size="xl" className="w-full sm:w-auto transition-all duration-500">
                {slides[currentSlide].cta}
              </Button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <a 
                href="mailto:brightsammy905@gmail.com" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                brightsammy905@gmail.com
              </a>
              <div className="hidden sm:block text-white/40">|</div>
              <a 
                href="tel:09069295450" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                09069295450
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;