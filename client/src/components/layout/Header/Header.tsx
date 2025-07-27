import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/LogosImages/GoldenCartLogo.png";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuGitCompareArrows } from "react-icons/lu";
import SideBar from "../Sidebar/SideBar";
import { navCategories } from "../../../data/constant";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header>
        {/* Top Strip */}
        <div className="top-strip md:py-2 border-b py-0.5 border-gray-200 bg-white">
          <div className="xs:px-2 sm:px-4 md:px-4">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <div className="text-[16px]">
                  Get up to 50% off new season styles,{" "}
                  <span className="text-[15px] text-red-500">
                    limited time only
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
                <Link
                  className="text-[16px] hover:text-blue-600 hover:translate-y-1 transition-all duration-75"
                  to={"./HelpCenter"}
                >
                  Help Center
                </Link>
                <Link
                  className="text-[16px] hover:text-red-600 hover:translate-y-1 transition-all"
                  to={"./OrderTracking"}
                >
                  Order Tracking
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Strip */}
        <div className="middle-strip h-auto bg-white md:py-2 md:px-3 border-b border-gray-200">
          <div className="px-3 sm:px-2 md:px-2 lg:px-3">
            <div className="flex items-center justify-between">
              <div className="logo w-40 h-full">
                <Link to={"/"}>
                  <img
                    src={logo}
                    alt="MyLogo"
                    className="w-full sm:hidden md:block"
                  />
                </Link>
              </div>

              {/* Search bar */}
              <div className="relative w-full max-w-lg hidden sm:block">
                <input
                  className="pl-9 pr-1 py-3 sm:mb-2 w-full placeholder-opacity-75 border-b-2 border-purple-600 placeholder-purple-700 border-0 outline-none"
                  placeholder="Search for products . . ."
                  aria-label="Search products"
                />
                <span className="absolute right-3 top-1/2 transform hover:scale-100 transition-all p-0 m-0 rounded-full scale-75 -translate-y-5 text-gray-500">
                  <button aria-label="Search">
                    <FaSearch className="size-10 p-3 rounded-2xl hover:text-purple-400 hover:bg-gray-100 transition-colors" />
                  </button>
                </span>

              {/* Icons */}
              </div>
              <div className="flex gap-2">
                <Link
                  to={"./Login"}
                  className="font-900 hover:translate-y-1 transition-all hover:text-red-500"
                >
                  Login
                </Link>
                |
                <Link
                  to={"./Register"}
                  className="font-900 hover:translate-y-1 transition-all mr-5 hover:text-blue-500"
                >
                  Register
                </Link>
                <div className="flex flex-row gap-3">
                  <Link to="#" className="hover:text-black">
                    <LuGitCompareArrows className="font-900 hover:scale-125 transition-all" />
                  </Link>
                  <Link to="#" className="hover:text-black">
                    <HiOutlineShoppingCart className="font-900 hover:scale-125 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="middle-strip-search h-auto bg-white md:py-2 border-b flex justify-center items-center border-gray-200">
          <div className="relative w-[70%] sm:max-w-lg sm:hidden">
            <input
              className="md:pl-9 pr-1 py-2 m-2 w-full placeholder-opacity-75 border-b-2 border-purple-600 placeholder-purple-700 border-0 outline-none"
              placeholder="Search for products . . ."
              aria-label="Search products"
            />
            <span className="absolute xs:right-1 sm:right-1 md:right-3 top-1/2 transform hover:scale-100 transition-all p-0 m-0 rounded-full scale-75 -translate-y-5 text-gray-500">
              <button aria-label="Search">
                <FaSearch className="size-10 p-3 rounded-2xl hover:text-purple-400 hover:bg-gray-100 transition-colors" />
              </button>
            </span>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="third-strip py-1 border-b border-gray-200 bg-white z-10">
          <div
            className="nav px-2 md:px-3 items-center flex justify-between py-2 group"
            ref={dropdownRef}
          >
            <button
              className="flex items-center gap-3 text-purple-900 font-semibold border-2 px-6 py-2 hover:bg-purple-900 hover:text-white transition-all"
              onClick={() => setSidebarOpen(true)}
            >
              GoldenShopping{" "}
              <HiOutlineShoppingCart className="group-hover:scale-125 transition-all" />
            </button>

            <SideBar
              categories={navCategories}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            <div className="flex flex-row gap-6 items-center px-8 sm:flex">
              {navCategories.map((cat, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={cat.id}
                    className="relative group hidden md:block"
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <Link
                      to={cat.linkTo}
                      className="flex items-center gap-1 text-purple-800 font-semibold hover:text-purple-600 py-2"
                    >
                      {cat.name}
                    </Link>

                    <AnimatePresence>
                      {isOpen && cat.subcategories.length > 0 && (
                        <motion.div
                          className="absolute top-full -left-4 bg-white shadow-lg rounded-md z-40 min-w-[170px] border border-purple-100 overflow-hidden"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {cat.subcategories.map((sub) => (
                            <Link
                              key={sub.id}
                              to={sub.linkTo}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="relative w-4/5 h-full p-5">
            <SideBar
              categories={navCategories}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;