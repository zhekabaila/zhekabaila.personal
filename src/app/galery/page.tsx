import { galery } from '@/constant/galery'
import Image from 'next/image'

const Galery = () => {
  return (
    <>
      <section className="grid grid-cols-1 mx-4 lg:mx-36 py-10 mt-16">
        <div className="flex flex-col justify-center lg:pr-10">
          <div className="flex items-center gap-x-4">
            <div className="bg-black size-2.5 lg:size-3" />
            <h2 className="text-base lg:text-lg font-bold">Galery</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-20 w-full">
          <div className="flex flex-col gap-4 md:gap-10">
            {galery.slice(0, 10).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  quality={100}
                  loading="lazy"
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            {galery.slice(11, 22).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  quality={100}
                  loading="lazy"
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            {galery.slice(22, 33).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  quality={100}
                  loading="lazy"
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Galery
