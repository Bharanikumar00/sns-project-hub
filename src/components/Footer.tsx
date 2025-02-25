import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
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
  return <footer className="bg-autumn-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Autumn</h3>
            <p className="text-gray-400 mb-6">
              Empowering students with innovative final year project solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-autumn-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-autumn-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-autumn-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-autumn-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-autumn-purple transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-autumn-purple transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-autumn-purple transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Project Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;