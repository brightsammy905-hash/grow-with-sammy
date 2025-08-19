import { Button } from "@/components/ui/enhanced-button";
import { Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
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
      
      {/* Hero Content */}
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
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Grow Your Business with{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Expert Digital Marketing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We help brands increase visibility, attract customers, and generate more sales 
            through proven online strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              👉 Let's Start Growing Your Business Today
            </Button>
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