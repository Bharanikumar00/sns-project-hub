
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features"
    }, {
      name: "Pricing",
      href: "#pricing"
    }, {
      name: "Testimonials",
      href: "#testimonials"
    }],
    company: [{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }],
    support: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Terms of Service",
      href: "#"
    }, {
      name: "Privacy Policy",
      href: "#"
    }]
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-gradient-to-b from-autumn-charcoal to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-autumn-purple/5 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-autumn-orange/5 rounded-full filter blur-3xl opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">SNS Project Hub</h3>
            <p className="text-gray-400 mb-6">
              Empowering students with innovative final year project solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: "#4267B2" }}
                className="hover:text-autumn-purple transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                className="hover:text-autumn-purple transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                className="hover:text-autumn-purple transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, color: "#0077B5" }}
                className="hover:text-autumn-purple transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-400 hover:text-autumn-purple transition-colors inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-400 hover:text-autumn-purple transition-colors group inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-400 hover:text-autumn-purple transition-colors group inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Project Hub. All rights reserved.</p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
