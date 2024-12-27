import MoreButton from '@/components/ui/MoreButton'
import Image from 'next/image'

export const HomeRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="grid grid-cols-1 lg:grid-cols-3 border-y-4 border-y-black mx-4 lg:mx-36"
    >
      <div className="lg:col-span-2 flex flex-col justify-center py-10 px-6 lg:p-10 border-x-4 border-x-black">
        <div className="flex items-center gap-x-4">
          <div className="bg-black size-2.5 lg:size-3" />
          <h2 className="text-base lg:text-lg font-bold">Roadmap</h2>
        </div>
        <div className="mt-10">
          <p className="text-base lg:text-lg font-medium">
            Yuk, mulai perjalananmu di dunia web development dengan roadmap
            belajar yang sudah saya siapkan! Panduan ini dirancang khusus untuk
            membantu kamu memahami langkah-langkah penting, dari dasar hingga
            tingkat lanjutan. Klik sekarang dan temukan arah belajarmu!
          </p>
          <br />
          <MoreButton title="Lihat Selengkapnya" link="/roadmap" />
        </div>
      </div>
      <div className="hidden lg:block border-r-4 border-r-black">
        <Image
          src="/images/tech_logos.svg"
          width={600}
          height={500}
          alt="Technology Logos"
          className="w-full h-auto object-center object-cover"
        />
      </div>
    </section>
  )
}
