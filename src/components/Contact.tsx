import { Button } from "@/components/ui/enhanced-button";
import { Mail, Phone, Rocket } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Take Your Business to the{" "}
              <span className="text-transparent bg-gradient-secondary bg-clip-text">
                Next Level?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Click below and let's build your success story today!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a 
                href="mailto:brightsammy905@gmail.com"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">brightsammy905@gmail.com</span>
              </a>
              
              <a 
                href="tel:09069295450"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">09069295450</span>
              </a>
            </div>
            
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              🚀 Get Started Now
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-white/80 mb-4">
              Ready to transform your business? Let's connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;