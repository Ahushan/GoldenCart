import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LogOut, User, ListOrdered, SquareActivity } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { NavCategory } from "@/data/types";

const user = {
  name: "Mohamed Ahushan",
  email: "ahushanahushan@gmail.com",
  avatar: "https://i.pravatar.cc/150?img=32",
};

interface SideBarProps {
  categories: NavCategory[];
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ categories, isOpen, onClose }: SideBarProps) => {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isVarientsOpen, setIsVarientOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState<
    NavCategory["subcategories"][0] | null
  >(null);

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  const category = categories.find((cat) => cat.id === 3);
  console.log(category?.subcategories, ": Category is ", category?.name);
  const sub = category?.subcategories[1];
  console.log(sub, ": Sub-Categoryis ", category?.subcategories[1].name);
  console.log(sub?.varients, "Varients");

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-60 md:w-64 p-0 flex flex-col">
          {/* HEADER */}
          <SheetHeader className="border-b">
            <SheetTitle className="text-xl text-purple-900">
              Categories
            </SheetTitle>
            <SheetDescription>Browse all categories</SheetDescription>
          </SheetHeader>
          {/* CATEGORY NAV */}
          <nav
            role="navigation"
            aria-label="Sidebar Navigation"
            className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar"
          >
            <ul className="space-y-4 ">
              {categories.map((category) => (
                <li key={category.id}>
                  <details className="group text-purple-900 font-semibold cursor-pointer group no-scrollbar">
                    <summary className="flex items-center justify-between hover:scale-105 transition-all no-scrollbar">
                      <span>{category.name}</span>
                      {category.subcategories?.length > 0 && (
                        <HiChevronDown
                          className={`group-open:rotate-0 rotate-90`}
                        />
                      )}
                    </summary>
                    <ul className="ml-2 mt-1 space-y-1 ">
                      {category.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <button
                            className="block text-sm py-2 my-2
                            active:bg-purple-500 active:text-white border-2 w-full text-center  text-gray-600
                            hover:text-purple-900"
                            onClick={() => {
                              setSelectedSub(sub);
                              setIsVarientOpen(true);
                            }}
                          >
                            {sub.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </nav>

          {/* FOOTER INSIDE SheetContent */}
          <div className="border-t relative pt-2 pb-2 px-4">
            <div className="absolute top-0 right-0">
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-purple-900"
                    onClick={() => setIsPopoverOpen((prev) => !prev)}
                  >
                    <SquareActivity className="h-4 w-4 mr-5" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  side="right"
                  className="space-y-2 bg-white w-fit mb-2"
                  onPointerDownOutside={() => setIsPopoverOpen(false)}
                >
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setIsPopoverOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm text-purple-900 hover:underline"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/orders");
                      setIsPopoverOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm text-purple-900 hover:underline"
                  >
                    <ListOrdered className="w-4 h-4" />
                    Orders
                  </button>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsPopoverOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm text-red-600 hover:underline"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-purple-900">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Sheet open={isVarientsOpen} onOpenChange={setIsVarientOpen}>
        <SheetContent side="right" className="w-60 md:w-64 p-4">
          <SheetHeader className="border-b">
            <SheetTitle className="text-purple-900">
              {selectedSub?.name}
            </SheetTitle>
            <SheetDescription>
              Browse product subcategories and variants.
            </SheetDescription>
          </SheetHeader>
          <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-700/80">
            {selectedSub?.varients?.map((variant, index) => (
              <li key={index}>
                <Link
                  to={`/${variant}`}
                  className="block py-1 hover:underline hover:text-purple-700 active:text-purple-800 transition duration-150"
                >
                  {variant}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
