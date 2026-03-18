import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#232f3e] text-white py-10 mt-5">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">About Ecart</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Ecart Science</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Connect with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Sell on Ecart</li>
            <li className="hover:underline cursor-pointer">Sell under Amazon Accelerator</li>
            <li className="hover:underline cursor-pointer">Protect and Build Your Brand</li>
            <li className="hover:underline cursor-pointer">Ecart Global Selling</li>
            <li className="hover:underline cursor-pointer">Supply to Ecart</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Fulfilment by  Ecart</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Ecart Pay on Merchants</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">Recalls and Product Safety Alerts</li>
            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
            <li className="hover:underline cursor-pointer">Amazon App Download</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;