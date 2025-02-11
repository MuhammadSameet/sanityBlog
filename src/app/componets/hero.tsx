
import { ulForr } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Hero = ({data}:{data:Blog}) => {

    return (
        <div>

<section className="text-gray-600 body-font px-auto ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4 ">
      <div className="">
        <div className="h-[500px] w-[350px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={ulForr(data.image).url()}
            alt="blog"
            width={800}
            height={800}
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {data.title}
            </h1>
            <p className="leading-relaxed mb-3">
              {data.paragraph}
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/blog/${data.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
        
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    )
}
export default Hero;
