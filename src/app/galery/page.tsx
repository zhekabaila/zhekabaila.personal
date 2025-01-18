import { skills } from '@/constant/skills'
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
        <div className="flex gap-10 mt-20">
          <div className="flex flex-col gap-10">
            {skills.map((_, index) => (
              <div key={index}>
                <Image
                  src={`https://placehold.co/${
                    (index + 1) % 2 === 0 ? '600x400' : '400x600'
                  }`}
                  alt="Gallery 1"
                  width={300}
                  height={200}
                  quality={100}
                  loading="lazy"
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            {skills.map((_, index) => (
              <div key={index}>
                <Image
                  src={`https://placehold.co/${
                    (index + 1) % 2 != 0 ? '600x400' : '400x600'
                  }`}
                  alt="Gallery 1"
                  width={300}
                  height={200}
                  quality={100}
                  loading="lazy"
                  className="object-cover size-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            {skills.map((_, index) => (
              <div key={index}>
                <Image
                  src={`https://placehold.co/${
                    (index + 1) % 2 === 0 ? '600x400' : '400x600'
                  }`}
                  alt="Gallery 1"
                  width={300}
                  height={200}
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
