import MoreButton from '@/components/ui/MoreButton'
import { roadmap } from '@/constant/roadmap'
import Image from 'next/image'

const Roadmap = () => {
  return (
    <section className="mx-4 lg:mx-36 py-10 mt-16">
      <div className="flex items-center gap-x-4">
        <div className="bg-black size-3 rounded-full" />
        <h2 className="text-lg font-bold">Roadmap belajar web dev</h2>
      </div>
      <div className="relative mt-14 max-w-4xl mx-auto">
        <div className="absolute w-[4px] h-full left-0 lg:left-1/2 bg-black"></div>
        <div className="block lg:hidden absolute -bottom-2 -left-2.5">
          <Image
            src="/icons/timeline-arrow-right.svg"
            alt="Arrow Icon"
            width={24}
            height={24}
            className="rotate-90 size-6 aspect-square object-center object-contain"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-20">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`relative flex lg:odd:justify-start lg:even:justify-end lg:odd:col-start-1 lg:even:col-start-2 lg:odd:pr-20 lg:even:pl-20 after:block after:top-1 after:-left-2 lg:odd:after:left-auto lg:odd:after:-right-3 lg:even:after:-left-2 after:content-[''] after:absolute after:size-5 after:z-30 before:z-20 after:bg-stabilo after:border-4 after:border-black lg:before:content-[''] lg:before:border-b-2 lg:before:border-dashed lg:before:border-b-black lg:before:h-1 lg:before:bg-transparent lg:even:before:w-36 lg:odd:before:w-60 lg:before:absolute lg:before:top-3 lg:even:before:left-0 lg:odd:before:right-0`}
              style={{ gridRowStart: (index + 1).toString() }}
            >
              <div className="min-h-56 lg:min-h-48 ml-10 lg:ml-0">
                <div className="flex items-center gap-x-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {item.link.map(({ name, url }, i) => (
                    <div key={i}>
                      <MoreButton link={url} blank title={name}></MoreButton>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
