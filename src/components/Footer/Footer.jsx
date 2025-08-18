import { Link } from "react-router-dom";
import { Button } from "..";
import { socialMediaLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-100 to-gray-50 text-gray-300 py-12 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-12">
        {/* Company Info */}
        <div className="sm:col-span-3 md:col-span-2">
          <h2 className="text-gray-900 text-xl font-bold">Mark One</h2>
          <p className="text-gray-700 font-medium mt-4 text-sm leading-relaxed max-w-sm">
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
          <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Inbound Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Outbound Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Knowledge Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Customer Engagement
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                AI-Enabled Tools
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Telecom Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                E-commerce
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Banking & Finance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Healthcare
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Global Enterprises
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm font-medium text-gray-500">
        © {new Date().getFullYear()} Mark One. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
