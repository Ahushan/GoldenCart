import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/LogosImages/GoldenCartLogo.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { LuGitCompareArrows } from "react-icons/lu";
import { RiBarChartHorizontalFill } from "react-icons/ri";
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
    <header>
      {/* Top Strip */}
      <aside className="top-strip hidden md:block md:py-2 border-b py-0.5 border-gray-200 bg-white">
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
      </aside>

      {/* Middle Strip */}
      <div className="middle-strip h-auto bg-white md:py-2 md:px-3 border-b border-gray-200">
        <div className="px-3 sm:px-2 md:px-2 lg:px-3">
          <div className="flex items-center justify-between">
            <figure className="logo w-40 h-full">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="MyLogo"
                  className="w-full sm:hidden md:block"
                />
              </Link>
            </figure>

            {/* Search bar */}
            <div className="relative w-full max-w-lg hidden sm:block">
              <input
                className="md:pl-5 pr-1 py-2 m-2 w-full placeholder-opacity-75 border-b-2 border-purple-600 placeholder-purple-700 border-0 outline-none text-bold"
                placeholder="..."
                aria-label="Search products"
              />
              <span
                className="absolute right-[1%] top-[35%] lg:top-[10%] transform hover:scale-100 flex flex-row items-center justify-center 
                p-2.5 bg-purple-500/50 text-white active:scale-90
                transition-all rounded-full scale-75"
              >
                <button aria-label="Search">
                  <FaSearch className="size-4 md:size-5 lg:size-6 active:text-black transition-colors" />
                </button>
              </span>
            </div>

            {/* Icons */}
            <div className="flex justify-center items-center gap-2">
              <Link to={"./Login"} className="text-black">
                <FaUserCircle className="size-4 md:size-5 lg:size-6 transition-all hover:scale-125" />
              </Link>
              |
              <div className="flex flex-row gap-3">
                <Link to="/orders" className="hover:text-black">
                  <LuGitCompareArrows className=" size-4 md:size-5 lg:size-6 font-900 hover:scale-125 transition-all" />
                </Link>
                <Link to="/cart" className="hover:text-black">
                  <HiMiniShoppingCart className="size-4 md:size-5 lg:size-6 font-900 hover:scale-125 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <section className="middle-strip-search h-auto bg-white md:py-2 border-b flex justify-center items-center border-gray-200">
        <div className="relative w-[70%] sm:max-w-lg sm:hidden">
          <input
            className="md:pl-9 pr-1 py-2 m-2 w-full placeholder-opacity-75 border-b-2 border-purple-600 placeholder-purple-700 border-0 outline-none text-bold"
            placeholder="..."
            aria-label="Search products"
          />
          <span
            className="absolute right-[1%] top-[25%] transform hover:scale-100 flex flex-row items-center justify-center 
            p-2.5 bg-purple-500/50 text-white transition-all rounded-full scale-75 active:scale-90"
          >
            <button aria-label="Search">
              <FaSearch className="size-4 md:size-5 lg:size-6 active:text-black transition-colors " />
            </button>
          </span>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="third-strip py-1 border-b border-gray-200 bg-white z-10">
        <div
          className="nav px-2 md:px-3 items-center flex justify-between py-2 group"
          ref={dropdownRef}
        >
          <button
            className="flex items-center gap-3 hover:bg-purple-800 font-semibold rounded-full px-2 ml-2 py-1 md:px-4
            bg-purple-900 text-white transition-all group/inner"
            onClick={() => setSidebarOpen(true)}
          >
            GoldenShopping{" "}
            <RiBarChartHorizontalFill className="group-hover/inner:scale-125 transition-all" />
          </button>

          <SideBar
            categories={navCategories}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <ul className="flex flex-row gap-6 items-center px-8 sm:flex">
            {navCategories.map((cat, index) => {
              const isOpen = openIndex === index;

              return (
                <li
                  key={cat.id}
                  className="relative group hidden md:block"
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <Link
                    to={`/${cat.name}`}
                    className="flex items-center gap-1 text-purple-800 font-semibold hover:text-purple-600 py-2"
                  >
                    {cat.name}
                  </Link>

                  <AnimatePresence>
                    {isOpen && cat.subcategories.length > 0 && (
                      <motion.ul
                        className="absolute top-full -left-4 bg-white shadow-lg rounded-md z-40 min-w-[170px] border border-purple-100 overflow-hidden"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {cat.subcategories.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={`/${sub.name}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
