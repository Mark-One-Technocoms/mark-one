import { Link } from "react-router-dom";
import { Button } from "..";
import { socialMediaLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12 lg:px-24 border-t-2 border-red-600">
      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-12">
        {/* Company Info */}
        <div className="sm:col-span-3 md:col-span-2">
          <h2 className="text-white text-xl font-semibold">Mark One</h2>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Learn more about how Mark One can help your company streamline
            customer communications, deliver 24×7 support, and optimize
            solutions to maximize efficiency.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="contact">
              <Button type="primary" size="lg" label="Contact Us" />
            </Link>
            <Link to="our-story">
              <Button type="secondary" size="lg" label="Learn More" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-400">
            {socialMediaLinks.map((socialMediaLink) => (
              <Link
                key={socialMediaLink.id}
                to={socialMediaLink.to}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <socialMediaLink.icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Inbound Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Outbound Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Knowledge Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customer Engagement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                AI-Enabled Tools
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Telecom Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                E-commerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Banking & Finance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Healthcare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Global Enterprises
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mark One. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
