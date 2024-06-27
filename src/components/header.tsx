import { ArrowDownRight, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="text-[#98989A] hover:bg-primary/20 transition-all text-xs md:text-sm inline-flex w-full justify-center items-center px-4 pt-10 sm:pt-6 pb-6 gap-2.5 group">
        <span className="group-hover:text-white transition-all">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </span>
        <ArrowDownRight className="-rotate-90 text-primary h-5 w-5 lg:w-6 lg:h-6 flex-shrink-0 group-hover:text-white" />
      </Link>
      <div className=" bg-[#1A1A1A] border-t border-[#262626]">
        <div className="h-[75px] flex items-center justify-between px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 max-w-[1596px] max-2xl:max-w-[1280px] mx-auto">
          <img src={Logo} alt="FutureTech" className="h-9 lg:h-10 min-[1920px]:h-12" />
          <Menu className="md:hidden" />
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 text-sm text-[#7E7E81]">
              <li className="hover:text-white transition-all">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-white transition-all">
                <Link to="/">News</Link>
              </li>
              <li className="hover:text-white transition-all">
                <Link to="/">Podcasts</Link>
              </li>
              <li className="hover:text-white transition-all">
                <Link to="/">Resources</Link>
              </li>
            </ul>
          </nav>
          <Button className="hidden md:block">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};
