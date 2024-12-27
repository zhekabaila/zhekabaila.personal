import MoreButton from '@/components/ui/MoreButton'
import Image from 'next/image'

export const HomeAbout = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 border-t-4 border-t-black mx-4 lg:mx-36 py-10"
    >
      <div className="flex flex-col justify-center lg:pr-10">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-2.5 lg:size-3" />
          <h2 className="text-base lg:text-lg font-bold">About</h2>
        </div>
        <div className="block lg:hidden mt-10">
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
        <div className="mt-10">
          <p className="text-base lg:text-lg font-medium">
            Hi! Saya Zheka Baila Arkan Saya seorang mahasiswa Informatika di
            Universitas Siliwangi Tasikmalaya, Jawa Barat, dan juga seorang
            Junior Web Developer yang antusias dengan pengembangan teknologi
            berbasis website.
          </p>
          <br />
          <MoreButton title="Lihat Selengkapnya" link="/about" />
        </div>
      </div>
      <div className="hidden lg:block pl-10 border-l-4 border-l-black">
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
    </section>
  )
}
