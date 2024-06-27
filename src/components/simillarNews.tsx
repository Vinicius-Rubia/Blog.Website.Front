import { ArrowDownRight, Heart, Send } from 'lucide-react';
import React from 'react';
import SimilarBlog1 from "../assets/images/similar-blog-1.png";
import SimilarBlog2 from "../assets/images/similar-blog-2.png";
import SimilarBlog3 from "../assets/images/similar-blog-3.png";
import { Button } from './ui/button';

export const SimilarNews: React.FC = () => {
  return (
    <div className='px-4 min-[540px]:px-10 min-[1000px]:px-10 min-2xl:px-0 py-10 lg:pb-[60px] min-[1920px]:pb-[80px] max-w-[1596px] max-2xl:max-w-[1280px] mx-auto'>
      <div className='flex items-center gap-4 flex-wrap justify-center min-[375px]:justify-between pb-10 min-[1920px]:pb-[40px] lg:pt-[40px] min-[1920px]:pt-[60px]'>
        <h4 className='text-xl font-medium lg:text-[22px] min-[1920px]:text-[28px]'>Similar News</h4>
        <Button variant="link">
          View All News
          <ArrowDownRight />
        </Button>
      </div>
      <div className='flex flex-wrap justify-between gap-7'>
        <div className='flex-1 min-w-[290px] [&>img]:w-full flex flex-col'>
          <img src={SimilarBlog1} alt="Blog 1" />
          <h5 className='font-semibold mt-2.5 mb-1'>A Decisive Victory for Progressive Policies</h5>
          <span className='text-[#98989A] text-sm'>Politics</span>
          <div className='flex items-end justify-between mt-2.5 flex-1'>
            <div className='flex items-center flex-wrap w-full sm:flex-nowrap gap-3'>
              <div className='flex items-center gap-2.5'>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Heart className='w-4 h-4 mr-1' />
                  2.2k
                </Button>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Send className='w-4 h-4 mr-1' />
                  60
                </Button>
              </div>
              <Button variant="link" className='w-full sm:w-auto'>
                Read More
                <ArrowDownRight />
              </Button>
            </div>
          </div>
        </div>

        <div className='flex-1 min-w-[290px] [&>img]:w-full flex flex-col'>
          <img src={SimilarBlog2} alt="Blog 2" />
          <h5 className='font-semibold mt-2.5 mb-1'>Tech Giants Unveil Cutting-Edge AI Innovations</h5>
          <span className='text-[#98989A] text-sm'>Technology</span>
          <div className='flex items-end justify-between mt-2.5 flex-1'>
            <div className='flex items-center flex-wrap sm:flex-nowrap w-full gap-3'>
              <div className='flex items-center gap-2.5'>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Heart className='w-4 h-4 mr-1' />
                  6k
                </Button>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Send className='w-4 h-4 mr-1' />
                  92
                </Button>
              </div>
              <Button variant="link" className='w-full sm:w-auto'>
                Read More
                <ArrowDownRight />
              </Button>
            </div>
          </div>
        </div>

        <div className='flex-1 min-w-[290px] [&>img]:w-full flex flex-col'>
          <img src={SimilarBlog3} alt="Blog 3" />
          <h5 className='font-semibold mt-2.5 mb-1'>COVID-19 Variants</h5>
          <span className='text-[#98989A] text-sm'>Health</span>
          <div className='flex items-end justify-between mt-2.5 flex-1'>
            <div className='flex items-center flex-wrap sm:flex-nowrap w-full gap-3'>
              <div className='flex items-center gap-2.5'>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Heart className='w-4 h-4 mr-1' />
                  10k
                </Button>
                <Button variant="link" className='bg-[#1A1A1A] [&>svg]:rotate-0 [&>svg]:ml-0 [&>svg]:text-[#98989A] [&>svg]:hover:text-white rounded-full text-xs py-0 h-8'>
                  <Send className='w-4 h-4 mr-1' />
                  124
                </Button>
              </div>
              <Button variant="link" className='w-full sm:w-auto'>
                Read More
                <ArrowDownRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
