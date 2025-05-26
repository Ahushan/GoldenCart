import { TiMessage } from "react-icons/ti";
import { FaInstagram, FaSquareFacebook, FaPinterest, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-white border-t-1 py-6">
        <div className="container flex flex-col lg:flex-row justify-around items-start gap-8 lg:gap-0">
          {/* Left Section */}
          <div className="left w-full lg:w-1/3 px-3 border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0">
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
              <h1 className="text-2xl font-semibold">Contact us</h1>
              <p className="text-gray-500 text-pretty">
                GoldenCart - Mega Super Store 507-Union Trade Centre France
              </p>
              <p className="hover:text-purple-500 text-gray-500">
                sales@yourcompany.com
              </p>
              <h1 className="text-purple-500 font-bold text-2xl">
                (+91) 9876-543-210
              </h1>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-2xl font-bold">
                <div className="text-purple-500 text-7xl font-bold">
                  <TiMessage />
                </div>
                <h1 className="text-purple-500 text-center sm:text-left">Online Chat Get Expert Help</h1>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="center w-full lg:flex lg:flex-row gap-6 border-b lg:border-b-0 lg:border-r px-6 pb-6 lg:pb-0 justify-between">
            <div className="products flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Products</h1>
              <p className="text-gray-500 hover:text-purple-500">Prices drop</p>
              <p className="text-gray-500 hover:text-purple-500">New products</p>
              <p className="text-gray-500 hover:text-purple-500">Best sales</p>
              <p className="text-gray-500 hover:text-purple-500">Contact us</p>
              <p className="text-gray-500 hover:text-purple-500">Sitemap</p>
              <p className="text-gray-500 hover:text-purple-500">Stores</p>
            </div>
            <div className="products flex flex-col gap-4 mt-6 lg:mt-0">
              <h1 className="text-2xl font-semibold">Our Company</h1>
              <p className="text-gray-500 hover:text-purple-500">Delivery</p>
              <p className="text-gray-500 hover:text-purple-500">Legal Notice</p>
              <p className="text-gray-500 hover:text-purple-500">Terms and conditions of use</p>
              <p className="text-gray-500 hover:text-purple-500">About us</p>
              <p className="text-gray-500 hover:text-purple-500">Secure payment</p>
              <p className="text-gray-500 hover:text-purple-500">Login</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="right w-full lg:w-1/3 flex flex-col gap-6 p-6">
            <h1 className="text-2xl font-semibold">Subscribe to newsletter</h1>
            <p className="text-gray-500">
              Subscribe to our latest newsletter to get news about special discounts.
            </p>
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-4 rounded-lg outline-purple-500 border-b w-full"
            />
            <button className="bg-purple-500 w-full text-white text-xl hover:bg-violet-800 font-normal p-4 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t bg-white mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[50px] gap-4 px-6 py-4 sm:py-0">
            {/* Social Icons */}
            <div className="flex flex-row gap-4 text-purple-500 text-2xl">
              <FaInstagram aria-label="Instagram" />
              <FaSquareFacebook aria-label="Facebook" />
              <FaPinterest aria-label="Pinterest" />
              <FaYoutube aria-label="YouTube" />
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm">
              © 2025 - Goldencart Shopping
            </div>

            {/* Payment Images */}
            <div className="flex flex-row gap-3 items-center">
              <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="Payment method 1" className="h-6" />
              <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="Payment method 2" className="h-6" />
              <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="Payment method 3" className="h-6" />
              <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="Payment method 4" className="h-6" />
              <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="Payment method 5" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
