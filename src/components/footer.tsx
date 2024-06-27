import { ArrowDownRight, Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-large.svg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const footerLinks = [
  {
    title: "Home",
    children: [
      {
        path: "/",
        label: "Features",
      },
      {
        path: "/",
        label: "Blogs",
      },
      {
        path: "/",
        label: "Resources",
        badge: "New",
      },
      {
        path: "/",
        label: "Testimonials",
      },
      {
        path: "/",
        label: "Contact Us",
      },
      {
        path: "/",
        label: "Newsletter",
      },
    ],
  },
  {
    title: "News",
    children: [
      {
        path: "/",
        label: "Trending Stories",
      },
      {
        path: "/",
        label: "Featured Videos",
      },
      {
        path: "/",
        label: "Technology",
      },
      {
        path: "/",
        label: "Health",
      },
      {
        path: "/",
        label: "Politics",
      },
      {
        path: "/",
        label: "Environment",
      },
    ],
  },
  {
    title: "Blogs",
    children: [
      {
        path: "/",
        label: "Quantum Computing",
      },
      {
        path: "/",
        label: "AI Ethics",
      },
      {
        path: "/",
        label: "Space Exploration",
      },
      {
        path: "/",
        label: "Biotechnology",
        badge: "New",
      },
      {
        path: "/",
        label: "Renewable Energy",
      },
      {
        path: "/",
        label: "Biohacking",
      },
    ],
  },
  {
    title: "Podcasts",
    children: [
      {
        path: "/",
        label: "AI Revolution",
      },
      {
        path: "/",
        label: "AI Revolution",
        badge: "New",
      },
      {
        path: "/",
        label: "TechTalk AI",
      },
      {
        path: "/",
        label: "AI Conversations",
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        path: "/",
        label: "Whitepapers",
      },
      {
        path: "/",
        label: "Ebooks",
        badge: "New",
      },
      {
        path: "/",
        label: "Reports",
      },
      {
        path: "/",
        label: "Research Papers",
      },
    ],
  },
];

export const Footer: React.FC = () => {
  const lastItems = footerLinks[footerLinks.length - 1];

  return (
    <div>
      <div className="bg-[#1A1A1A]">
        <section className="px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 py-10 lg:py-20 min-[1920px]:py-[120px] max-w-[1596px] max-2xl:max-w-[1280px] mx-auto">
          <div className="mb-10 lg:flex items-center gap-14">
            <img src={Logo} alt="Logo" className="mx-auto w-16 h-16 xl:w-[120px] xl:h-[120px] min-[1920px]:w-[150px] min-[1920px]:h-[150px]" />
            <div className="mt-4">
              <span className="bg-[#333333] p-1 lg:ml-0 rounded font-medium text-sm lg:text-base min-[1920px]:text-xl text-center w-fit mx-auto flex">
                Learn, Connect, and Innovate
              </span>
              <h2 className="font-medium text-[28px] lg:text-[44px] min-[1920px]:text-[58px] mt-5 mb-1">
                Be Part of the Future Tech Revolution
              </h2>
              <p className="text-sm lg:text-base min-[1920px]:text-xl text-[#7E7E81]">
                Immerse yourself in the world of future technology. Explore our
                comprehensive resources, connect with fellow tech enthusiasts,
                and drive innovation in the industry. Join a dynamic community
                of forward-thinkers.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch gap-2.5 lg:mt-20 bg-[#141414] rounded-[10px] p-2.5 max-w-[1596px] max-2xl:max-w-[1280px]">
            <Link to="/" className="bg-[#1A1A1A] rounded-[10px] flex-1 p-6 min-w-[250px] lg:p-8 hover:bg-input group">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold lg:text-lg min-[1920px]:text-[22px]">Resource Access</h4>
                <Button size="icon" className="rounded-full group-hover:bg-transparent group-hover:text-primary group-hover:border group-hover:border-primary">
                  <ArrowDownRight className="-rotate-90" />
                </Button>
              </div>
              <p className="text-[#98989A] text-sm mt-2.5 lg:text-base min-[1920px]:text-lg">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
            </Link>
            <Link to="/" className="bg-[#1A1A1A] rounded-[10px] flex-1 p-6 min-w-[250px] hover:bg-input group">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold lg:text-lg min-[1920px]:text-[22px]">Community Forum</h4>
                <Button size="icon" className="rounded-full group-hover:bg-transparent group-hover:text-primary group-hover:border group-hover:border-primary">
                  <ArrowDownRight className="-rotate-90" />
                </Button>
              </div>
              <p className="text-[#98989A] text-sm mt-2.5 lg:text-base min-[1920px]:text-lg">Join our active community forum to discuss industry trends and collaborate with peers.</p>
            </Link>
            <div className="bg-[#1A1A1A] rounded-[10px] flex-1 p-6 min-w-[250px] hover:bg-input group">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold lg:text-lg min-[1920px]:text-[22px]">Tech Events</h4>
                <Button size="icon" className="rounded-full group-hover:bg-transparent group-hover:text-primary group-hover:border group-hover:border-primary">
                  <ArrowDownRight className="-rotate-90" />
                </Button>
              </div>
              <p className="text-[#98989A] text-sm mt-2.5 lg:text-base min-[1920px]:text-lg">Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.</p>
            </div>
          </div>
        </section>
      </div>
      <Separator />

      <footer className="mb-6 px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 pt-10 max-w-[1596px] max-2xl:max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 min-[540px]:grid-cols-3 sm:grid-cols-4 lg:flex lg:justify-between gap-5">
          {footerLinks.map((link, index) => (
            <nav key={index}>
              <h2 className="mb-4">{link.title}</h2>
              <ul className="space-y-2 text-sm text-[#7E7E81]">
                {link.title === lastItems.title
                  ? lastItems.children.map((lastItem, index) => (
                      <li
                        key={index}
                        className="hover:text-white transition-all"
                      >
                        <Button variant="link" asChild>
                          <Link to={lastItem.path}>
                            {lastItem.label}
                            <ArrowDownRight className="ml-1" />
                          </Link>
                        </Button>
                      </li>
                    ))
                  : link.children.map((item, index) => (
                      <li
                        key={index}
                        className="hover:text-white transition-all"
                      >
                        <Link to={item.path}>
                          {item.label}
                          {item.badge && (
                            <Badge className="ml-2">{item.badge}</Badge>
                          )}
                        </Link>
                      </li>
                    ))}
              </ul>
            </nav>
          ))}
        </div>
        <Separator className="mt-10 mb-6" />
        <div className="text-sm text-center md:flex justify-between items-center">
          <div className="flex items-center justify-center text-white space-x-3.5">
            <Twitter className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
          <p className="text-[#7E7E81] my-5 md:-order-1">
            Terms & Conditions | Privacy Policy
          </p>
          <p className="text-[#7E7E81]">
            &copy; 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
