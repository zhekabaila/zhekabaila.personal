import MoreButton from '@/components/ui/MoreButton'
import Image from 'next/image'
import Container from '../../Container'

export const HomeAbout = () => {
  return (
    <Container id="about" margin className="grid grid-cols-1 lg:grid-cols-2 border-t-4 border-t-black py-10">
      <div className="flex flex-col justify-center pr-10">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-3 rounded-full" />
          <h2 className="text-lg font-bold">About</h2>
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
          <MoreButton title="Lihat Selengkapnya" link="/about" />
        </div>
      </div>
      <div className="pl-10 border-l-4 border-l-black">
        <Image
          src="/images/zhekabaila-square.jpg"
          alt="Zheka Baila Arkan Picture"
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className="size-full object-center object-cover aspect-square grayscale-[0]"
        />
      </div>
    </Container>
  )
}
