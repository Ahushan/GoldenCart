import { TiMessage } from "react-icons/ti";
import { FaInstagram, FaSquareFacebook, FaPinterest, FaYoutube } from "react-icons/fa6";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container grid gap-10 lg:grid-cols-3 px-4">
        {/* Contact Info */}
        <div className="space-y-4 text-center lg:text-left border-b pb-6 lg:border-b-0 lg:border-r lg:pr-6">
          <h1 className="text-2xl font-semibold">Contact us</h1>
          <p className="text-gray-500">GoldenCart - Mega Super Store 507-Union Trade Centre France</p>
          <p className="text-gray-500 hover:text-purple-500">sales@yourcompany.com</p>
          <h1 className="text-purple-500 font-bold text-2xl">(+91) 9876-543-210</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-purple-500 text-2xl">
            <TiMessage className="text-5xl" />
            <p className="font-bold">Online Chat Get Expert Help</p>
          </div>
        </div>

        {/* Navigation Links */}
        <FooterNav />

        {/* Newsletter */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Subscribe to newsletter</h1>
          <p className="text-gray-500">Get updates about discounts and special offers.</p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 border rounded-lg outline-purple-500"
          />
          <button className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-violet-800">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-6 py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-purple-500 text-xl">
            <FaInstagram />
            <FaSquareFacebook />
            <FaPinterest />
            <FaYoutube />
          </div>
          <p className="text-gray-500 text-sm text-center">© 2025 - Goldencart Shopping</p>
          <div className="flex gap-2 items-center">
            {["carte_bleue", "visa", "master_card", "american_express", "paypal"].map((img) => (
              <img
                key={img}
                src={`https://ecommerce-frontend-view.netlify.app/${img}.png`}
                alt={img}
                className="h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
