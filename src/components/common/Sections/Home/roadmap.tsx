import MoreButton from '@/components/ui/MoreButton'

export const HomeRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="grid grid-cols-1 lg:grid-cols-3 border-y-4 border-y-black mx-4 lg:mx-36"
    >
      <div className="lg:col-span-2 flex flex-col justify-center p-10 border-x-4 border-x-black lg:border-b-4 lg:border-b-black">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-3 rounded-full" />
          <h2 className="text-lg font-bold">Roadmap</h2>
        </div>
        <div className="mt-10">
          <p className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            officiis vel nihil molestias expedita beatae molestiae. Optio nulla
            sapiente quos.
          </p>
          <br />
          <p className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            officiis vel nihil molestias expedita beatae molestiae. Optio nulla
            sapiente quos.
          </p>
          <br />
          <MoreButton title="Lihat Selengkapnya" link="/roadmap" />
        </div>
      </div>
      <div className="bg-stabilo border-b-4 border-b-black"></div>
      <div className="bg-stabilo"></div>
      <div className="lg:col-span-2 flex flex-col justify-center p-10 border-x-4 border-x-black">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-3 rounded-full" />
          <h2 className="text-lg font-bold">Experience</h2>
        </div>
        <div className="mt-10">
          <p className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            officiis vel nihil molestias expedita beatae molestiae. Optio nulla
            sapiente quos.
          </p>
          <br />
          <p className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            officiis vel nihil molestias expedita beatae molestiae. Optio nulla
            sapiente quos.
          </p>
          <br />
          <MoreButton title="Lihat Selengkapnya" link="/experience" />
        </div>
      </div>
    </section>
  )
}
