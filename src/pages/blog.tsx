import { BlogContent } from "@/components/blog-content";
import { BlogInfo } from "@/components/blog-info";
import { SimilarNews } from "@/components/simillarNews";
import { Separator } from "@/components/ui/separator";
import React from "react";
import BannerMobile from "../assets/images/banner-main-mobile.png";
import BannerTablet from "../assets/images/banner-main-tablet.png";
import Banner from "../assets/images/banner-main.png";

export const Blog: React.FC = () => {
  return (
    <div>
      <div className="relative min-h-[285px] max-h-[600px] flex">
        <img
          src={BannerMobile}
          alt="Banner"
          className="sm:hidden w-full object-cover"
        />
        <img
          src={BannerTablet}
          alt="Banner"
          className="hidden sm:block min-[1440px]:hidden object-cover w-full"
        />
        <img
          src={Banner}
          alt="Banner"
          className="hidden min-[1440px]:block object-cover w-full"
        />

        <div className="absolute h-full w-full flex items-end left-0 right-0 bottom-0 pb-4 lg:pb-9 xl:pb-16  bg-gradient-to-b from-background/0 via-background/85 via-[88%] to-background">
          <p className="flex font-semibold text-[28px] xl:text-[44px] min-[1440px]:text-[64px] text-center w-full justify-center">
            Entendendo o Conceito de State no React
          </p>
        </div>
      </div>
      <Separator />
      <div>
        {/* <div className="flex flex-wrap justify-center px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 max-w-[1596px] max-2xl:max-w-[1280px] mx-auto">
          <BlogInfo />
          <BlogContent />
        </div> */}
        <div className="grid grid-cols-1 min-[1440px]:grid-cols-12 max-w-[1596px] px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 max-2xl:max-w-[1280px] mx-auto">
          <BlogInfo />
          <BlogContent />
        </div>
      </div>
      <Separator />
      <SimilarNews />
    </div>
  );
};
