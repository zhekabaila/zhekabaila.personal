'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { portfolios } from '@/constant/portfolios'
import MoreButton from '@/components/ui/MoreButton'

export const HomePortfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col border-t-4 border-t-black mx-4 lg:mx-36 py-10"
    >
      <div className="flex lg:hidden items-center gap-x-4">
        <div className="bg-black size-2.5 lg:size-3" />
        <h2 className="text-base lg:text-lg font-bold">My Portfolio{"'"}s</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="flex flex-col justify-center lg:pl-10 lg:basis-1/2">
          <div className="hidden lg:flex items-center gap-x-4">
            <div className="bg-black size-3" />
            <h2 className="text-base lg:text-lg font-bold">
              My Portfolio{"'"}s
            </h2>
          </div>
          <div className="mt-10">
            <p className="text-base lg:text-lg font-medium">
              Ayo! Lihat Proyek-Proyek Saya. Jelajahi berbagai proyek menarik
              yang telah saya kerjakan menggunakan Laravel, Next.js, React, dan
              TailwindCSS. Temukan karya terbaik saya dan lihat bagaimana
              teknologi dapat menghadirkan solusi inovatif.
            </p>
            <br />
            <MoreButton title="Lihat Selengkapnya" link="/portfolio" />
          </div>
        </div>
        <div className="mt-10 lg:pr-10 lg:border-r-4 lg:border-r-black lg:basis-1/2">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="swiper_container"
          >
            {portfolios.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  quality={100}
                  loading="lazy"
                  className="size-full object-center object-cover aspect-[5/3]"
                />
                <div className="flex flex-col justify-end gap-2 lg:gap-4 p-4 lg:p-9 absolute inset-0 bg-gradient-to-t from-black/60">
                  <h3 className="text-white font-semibold text-sm lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white font-medium text-sm lg:text-lg line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
