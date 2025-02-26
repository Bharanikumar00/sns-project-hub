import { GraduationCap, BookOpen, Award } from "lucide-react";
const HeroSection = () => {
  return <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-autumn-purple/5 to-autumn-orange/5" />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-slow">
            <span className="inline-block bg-autumn-purple/10 text-autumn-purple px-4 py-1 rounded-full text-sm font-medium mb-6">50+ Teams Already Got Projects From Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-autumn-charcoal mb-6 leading-tight">
              Transform Your Final Year Project into a{" "}
              <span className="text-autumn-purple">Masterpiece</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get access to premium final year projects, expert guidance, and 24/7 support. Stand out in your college with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="bg-autumn-purple text-white px-8 py-3 rounded-lg hover:bg-autumn-purple/90 transition-all transform hover:scale-105">
                Explore Projects
              </button>
              <button className="border-2 border-autumn-purple text-autumn-purple px-8 py-3 rounded-lg hover:bg-autumn-purple/5 transition-all">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <GraduationCap className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">One-on-one mentoring from industry experts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <BookOpen className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Premium Projects</h3>
              <p className="text-gray-600 text-sm">Unique and innovative project solutions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-autumn-purple/10 rounded-lg mb-4 mx-auto">
                <Award className="text-autumn-purple" size={24} />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;