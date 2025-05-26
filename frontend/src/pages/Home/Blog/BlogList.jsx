import BlogData from "./BlogData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { FaAmazonPay } from "react-icons/fa";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsHeadset } from "react-icons/bs";

const providingData = [
  {
    icon: <LiaShippingFastSolid />,
    title: "Free Shipping",
    des: "For all Orders Over $100",
  },
  {
    icon: <PiKeyReturnLight />,
    title: "30 Days Returns",
    des: "For an Exchange Products",
  },
  {
    icon: <TfiGift />,
    title: "Special Gifts",
    des: "Our First Products order",
  },
  {
    icon: <FaAmazonPay />,
    title: "Secured Payment",
    des: "Payment Cards Accepted",
  },
  {
    icon: <BsHeadset />,
    title: "Support 24/7",
    des: "Contact us Anytime",
  },
];

const BlogCards = ({ Data }) => {
  return (
    <div className="bg-slate-200 hover:shadow-md rounded-lg overflow-hidden transition-transform transform group">
      <div className="img-wrapper">
        <img
          src={Data.imgPath}
          alt="Image"
          className="w-full h-48 object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{Data.title}</h2>
        <p className="text-gray-500 group-hover:text-gray-800 mb-4">{Data.content}</p>
        <Link
          to={`/blog/${Data.title.replace(/\s+/g, "-").toLowerCase()}`}
          className="group-hover:text-red-500 text-sm flex items-center transition-all"
        >
          Learn more
          <FaArrowRight className="ml-1 group-hover:translate-x-3 transition" />
        </Link>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="p-4 my-1 bg-white">
      <h1 className="font-semibold text-lg px-3 py-5">From the Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BlogData.map((data, index) => (
          <BlogCards key={index} Data={data} />
        ))}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {providingData.map((data, index) => (
          <div
            key={index}
            className="border p-4 flex flex-col items-center text-center bg-slate-100 rounded hover:shadow group"
          >
            <div className="text-3xl text-purple-500 mb-2 group-hover:text-purple-950 group-hover:scale-105">{data.icon}</div>
            <h1 className="font-semibold">{data.title}</h1>
            <p className="text-sm text-gray-600">{data.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
