import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { NavCategory } from "../../../data/constant";

interface SideBarProps {
  categories: NavCategory[];
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ categories, isOpen, onClose }: SideBarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={() => onClose(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-60 md:w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b border-purple-600">
          <h2 className="text-xl font-bold text-purple-900">Categories</h2>
          <button
            onClick={() => onClose(false)}
            className="text-purple-900 font-normal hover:scale-150 transistion-all duration-100 text-3xl"
          >
            ×
          </button>
        </div>

        <ul className="pt-6 pl-3 pr-2 space-y-4 overflow-y-auto h-[calc(100%-60px)] ">
          {categories.map((category) => (
            <li key={category.id} className="group">
              <details className="text-purple-900 font-semibold cursor-pointer">
                <summary className="flex items-center hover:scale-105 transition-all justify-between">
                  <span>{category.name}</span>
                  {category.subcategories?.length > 0 && <HiChevronDown />}
                </summary>
                <ul className="ml-2 mt-0 space-y-1">
                  {category.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={sub.linkTo}
                        className="block text-sm pt-2 text-gray-600 hover:text-purple-900"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
